import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 120;
const MOUSE_RADIUS = 200;
const BASE_SPEED = 0.3;

const QuantumField: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number>(0);

    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * BASE_SPEED,
                vy: (Math.random() - 0.5) * BASE_SPEED,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
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

        const animate = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;

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

                const alpha = p.opacity + glow * 0.5;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius + glow * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 243, 255, ${alpha})`;
                ctx.fill();

                // Subtle white core for bright particles
                if (glow > 0.3) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${glow * 0.6})`;
                    ctx.fill();
                }
            }

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        // Only connect near mouse
                        const midX = (a.x + b.x) / 2;
                        const midY = (a.y + b.y) / 2;
                        const mouseDist = Math.sqrt(
                            (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
                        );

                        if (mouseDist < MOUSE_RADIUS * 1.5) {
                            const lineAlpha =
                                (1 - dist / CONNECTION_DISTANCE) *
                                (1 - mouseDist / (MOUSE_RADIUS * 1.5)) *
                                0.4;

                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(b.x, b.y);
                            ctx.strokeStyle = `rgba(0, 243, 255, ${lineAlpha})`;
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
