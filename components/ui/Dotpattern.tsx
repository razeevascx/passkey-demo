export default function Dotpattern() {
  return (
    <div className="absolute inset-0 -z-10 ">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dotPattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="10"
              cy="10"
              r="1"
              fill="hsl(0, 0%, 90%)"
              stroke="hsl(0, 0%, 90%)"
              strokeWidth="0.5"
              opacity="0.6"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}
