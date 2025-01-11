const Divider = () => {
  return (
    <div className="relative w-full h-20">
      {/* Main line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Curved line overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40h400c100 0 100 32 200 32s100-32 200-32h400"
          stroke="url(#divider-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.2))" }}
        />
        <defs>
          <linearGradient id="divider-gradient" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Divider;
