"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToTopOnNavigate = () => {
  const location = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
};

export default ScrollToTopOnNavigate;
