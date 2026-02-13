import React from 'react';
import { content } from '../../data/content';

const HomePage: React.FC = () => {
    return (
        <div className="home-page" style={{ padding: '2rem', textAlign: 'center' }}>
            <h1 className="neon-text-pink">{content.home.title}</h1>
            <h2 style={{ color: 'var(--text-secondary)' }}>{content.home.subtitle}</h2>
            <div className="glass-panel" style={{ margin: '2rem auto', padding: '2rem', maxWidth: '600px' }}>
                <p>Bienvenue dans le Portfolio V2 (Architecture V3 validated).</p>
            </div>
        </div>
    );
};

export default HomePage;
