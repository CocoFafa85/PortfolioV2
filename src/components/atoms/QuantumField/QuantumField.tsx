import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
    hue: number; // 0=cyan, 1=violet, 2=pink
}

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 130;
const MOUSE_RADIUS = 220;
const BASE_SPEED = 0.25;

// Color palette: Cyan → Violet → Pink
const COLORS = [
    { r: 0, g: 243, b: 255 },   // Cyan  #00f3ff
    { r: 188, g: 19, b: 254 },  // Violet #bc13fe
    { r: 255, g: 0, b: 128 },   // Pink  #ff0080
];

const QuantumField: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number>(0);
    const timeRef = useRef(0);

    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * BASE_SPEED,
                vy: (Math.random() - 0.5) * BASE_SPEED,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                hue: Math.floor(Math.random() * 3),
            });
        }
        particlesRef.current = particles;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            if (particlesRef.current.length === 0) {
                initParticles(canvas.width, canvas.height);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };

        // ═══ Draw subtle perspective grid ═══
        const drawGrid = (w: number, h: number, time: number) => {
            ctx.save();
            ctx.strokeStyle = 'rgba(0, 243, 255, 0.04)';
            ctx.lineWidth = 0.5;

            const gridSpacing = 60;
            const pulse = Math.sin(time * 0.001) * 0.02 + 0.04;
            ctx.strokeStyle = `rgba(0, 243, 255, ${pulse})`;

            // Horizontal lines
            for (let y = 0; y < h; y += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }

            // Vertical lines
            for (let x = 0; x < w; x += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }

            ctx.restore();
        };

        // ═══ Draw horizontal scan-line ═══
        const drawScanLine = (w: number, h: number, time: number) => {
            const scanY = (time * 0.05) % (h + 40) - 20;
            const gradient = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
            gradient.addColorStop(0, 'rgba(0, 243, 255, 0)');
            gradient.addColorStop(0.5, 'rgba(0, 243, 255, 0.06)');
            gradient.addColorStop(1, 'rgba(0, 243, 255, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, scanY - 20, w, 40);
        };

        // ═══ Draw mouse halo ═══
        const drawMouseHalo = (mouse: { x: number; y: number }) => {
            if (mouse.x < -9000) return;
            const gradient = ctx.createRadialGradient(
                mouse.x, mouse.y, 0,
                mouse.x, mouse.y, MOUSE_RADIUS
            );
            gradient.addColorStop(0, 'rgba(188, 19, 254, 0.08)');
            gradient.addColorStop(0.4, 'rgba(0, 243, 255, 0.04)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(
                mouse.x - MOUSE_RADIUS,
                mouse.y - MOUSE_RADIUS,
                MOUSE_RADIUS * 2,
                MOUSE_RADIUS * 2
            );
        };

        const animate = (timestamp: number) => {
            timeRef.current = timestamp;
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            const mouse = mouseRef.current;

            // Background layers
            drawGrid(width, height, timestamp);
            drawScanLine(width, height, timestamp);
            drawMouseHalo(mouse);

            const particles = particlesRef.current;

            // Update & draw particles
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Mouse proximity — glow boost
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const glow = dist < MOUSE_RADIUS ? 1 - dist / MOUSE_RADIUS : 0;

                const alpha = p.opacity + glow * 0.6;
                const color = COLORS[p.hue];

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius + glow * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
                ctx.fill();

                // Subtle white core for bright particles near cursor
                if (glow > 0.3) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${glow * 0.5})`;
                    ctx.fill();
                }
            }

            // Draw connections — multi-color gradient based on particle hues
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const midX = (a.x + b.x) / 2;
                        const midY = (a.y + b.y) / 2;
                        const mouseDist = Math.sqrt(
                            (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
                        );

                        if (mouseDist < MOUSE_RADIUS * 1.5) {
                            const lineAlpha =
                                (1 - dist / CONNECTION_DISTANCE) *
                                (1 - mouseDist / (MOUSE_RADIUS * 1.5)) *
                                0.35;

                            // Use color of first particle for the line
                            const c = COLORS[a.hue];
                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(b.x, b.y);
                            ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${lineAlpha})`;
                            ctx.lineWidth = 0.6;
                            ctx.stroke();
                        }
                    }
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'auto',
            }}
        />
    );
};

export default QuantumField;
