import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link to="/" onClick={handleClick} className="flex items-center">
      <div className="flex items-center">
        <img 
          src="/NG.svg" 
          alt="NeuroGen Lab Logo" 
          className="sm:w-[50px] md:w-[120px] lg:w-[180px]"
        />
      </div>
    </Link>
  );
};

export default Logo;