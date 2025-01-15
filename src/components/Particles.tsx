'use client';

import { useEffect, useState } from 'react';

const Particles = () => {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    duration: number;
    delay: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 20,
      delay: -Math.random() * 20,
      size: 2 + Math.random() * 3,
      opacity: 0.2 + Math.random() * 0.5
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) {
    return null;
  }

  return (
    <div className="particles-container absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle absolute rounded-full bg-emerald-500"
          style={{
            '--x': `${particle.x}%`,
            '--y': `${particle.y}%`,
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
            '--size': `${particle.size}px`,
            '--opacity': particle.opacity,
            animation: 'float var(--duration) var(--delay) infinite linear',
            top: 'var(--y)',
            left: 'var(--x)',
            width: 'var(--size)',
            height: 'var(--size)',
            opacity: 'var(--opacity)'
          } as any}
        />
      ))}
    </div>
  );
};

export default Particles;