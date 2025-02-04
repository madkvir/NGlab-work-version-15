import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className }) => {
  return (
    <div className={className}>
      <Icon />
    </div>
  );
};

export default IconWrapper; 