import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackToHome = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
      Back to Home
    </Link>
  );
};

export default BackToHome;
