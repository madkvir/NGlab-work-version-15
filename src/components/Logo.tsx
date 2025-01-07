import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Logo = () => {
  const location = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (location === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href="/" onClick={handleClick} className="flex items-center">
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
