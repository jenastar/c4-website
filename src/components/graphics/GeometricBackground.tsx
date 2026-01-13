import { motion } from "framer-motion";

interface GeometricBackgroundProps {
  className?: string;
}

export function GeometricBackground({ className = "" }: GeometricBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blue Circle - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -top-20 -right-20 w-96 h-96"
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-float"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="hsl(var(--google-blue))"
            strokeWidth="2"
            opacity="0.2"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="hsl(var(--google-blue))"
            opacity="0.08"
          />
        </motion.svg>
      </motion.div>

      {/* Red Square - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, rotate: -45, scale: 0 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute -bottom-16 -left-16 w-64 h-64"
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-float-slow"
          style={{ animationDelay: "2s" }}
        >
          <rect
            x="40"
            y="40"
            width="120"
            height="120"
            rx="8"
            fill="none"
            stroke="hsl(var(--google-red))"
            strokeWidth="2"
            opacity="0.2"
            transform="rotate(15 100 100)"
          />
          <rect
            x="60"
            y="60"
            width="80"
            height="80"
            rx="4"
            fill="hsl(var(--google-red))"
            opacity="0.08"
            transform="rotate(15 100 100)"
          />
        </motion.svg>
      </motion.div>

      {/* Yellow Triangle - Right Center */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/3 -right-8 w-48 h-48"
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-float"
          style={{ animationDelay: "1s" }}
        >
          <polygon
            points="100,30 170,150 30,150"
            fill="none"
            stroke="hsl(var(--google-yellow))"
            strokeWidth="2"
            opacity="0.3"
          />
          <polygon
            points="100,50 150,130 50,130"
            fill="hsl(var(--google-yellow))"
            opacity="0.1"
          />
        </motion.svg>
      </motion.div>

      {/* Green Circle - Left Center */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-1/2 -left-12 w-40 h-40"
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-float-slow"
          style={{ animationDelay: "3s" }}
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="hsl(var(--google-green))"
            strokeWidth="2"
            opacity="0.2"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="hsl(var(--google-green))"
            opacity="0.08"
          />
        </motion.svg>
      </motion.div>

      {/* Small decorative dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-1/4 left-1/4"
      >
        <div className="w-3 h-3 rounded-full bg-google-blue opacity-20 animate-pulse-slow" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-2/3 right-1/4"
      >
        <div className="w-2 h-2 rounded-full bg-google-red opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-1/4 left-1/3"
      >
        <div className="w-4 h-4 rounded-full bg-google-green opacity-15 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </motion.div>
    </div>
  );
}
