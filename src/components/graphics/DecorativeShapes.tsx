import { motion } from "framer-motion";

interface DecorativeShapesProps {
  variant?: "default" | "minimal" | "accent";
  className?: string;
}

export function DecorativeShapes({ variant = "default", className = "" }: DecorativeShapesProps) {
  if (variant === "minimal") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-1/2 h-full"
        >
          <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
            <circle cx="350" cy="100" r="4" fill="hsl(var(--google-blue))" opacity="0.3" />
            <circle cx="380" cy="200" r="2" fill="hsl(var(--google-red))" opacity="0.3" />
            <circle cx="320" cy="300" r="3" fill="hsl(var(--google-yellow))" opacity="0.3" />
            <circle cx="360" cy="400" r="2" fill="hsl(var(--google-green))" opacity="0.3" />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full animate-float-slow">
            <rect
              x="20"
              y="20"
              width="160"
              height="160"
              rx="20"
              fill="none"
              stroke="hsl(var(--google-blue))"
              strokeWidth="1"
              opacity="0.15"
            />
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="hsl(var(--google-blue))"
              opacity="0.05"
            />
          </svg>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute -left-20 top-20 w-60 h-60"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
          <polygon
            points="100,10 190,80 160,180 40,180 10,80"
            fill="none"
            stroke="hsl(var(--google-yellow))"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -right-16 bottom-20 w-48 h-48"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float-slow">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="hsl(var(--google-green))"
            strokeWidth="1"
            opacity="0.2"
          />
        </svg>
      </motion.div>
    </div>
  );
}
