"use client";

import { Link } from "../i18n/routing";
import transformLang from "../utils/transformLang";

interface LogoProps {
  language?: string;
}

const Logo = ({ language = "en" }: LogoProps) => {
  return (
    <Link href="/" locale={transformLang(language)}>
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
