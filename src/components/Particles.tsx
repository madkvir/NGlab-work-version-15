import React from 'react';

const Particles = () => {
  return (
    <div className="particles-container">
      {[...Array(40)].map((_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--duration': `${20 + Math.random() * 20}s`,
            '--delay': `${-Math.random() * 20}s`,
            '--size': `${2 + Math.random() * 3}px`,
            '--opacity': Math.random() * 0.5 + 0.2,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Particles;