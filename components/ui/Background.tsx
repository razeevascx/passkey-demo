import * as motion from "motion/react-client";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 0 0 L 80 0 80 80"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="160"
              initial={{ strokeDashoffset: -160 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: 1,
              }}
              viewport={{ once: true }}
            />
          </pattern>
        </defs>

        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
}
