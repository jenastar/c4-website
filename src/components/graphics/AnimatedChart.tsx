import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedChartProps {
  className?: string;
}

export function AnimatedChart({ className = "" }: AnimatedChartProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Line graph path - representing growth trajectory
  const linePath = "M 20 140 Q 60 130 100 110 T 180 80 T 260 50 T 340 30";
  
  // Area under the line for gradient fill
  const areaPath = "M 20 140 Q 60 130 100 110 T 180 80 T 260 50 T 340 30 L 340 160 L 20 160 Z";

  return (
    <svg
      ref={ref}
      viewBox="0 0 360 180"
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Gradient for area fill */}
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
        
        {/* Gradient for the line */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(217 91% 60%)" /> {/* google-blue */}
          <stop offset="50%" stopColor="hsl(142 71% 45%)" /> {/* google-green */}
          <stop offset="100%" stopColor="hsl(48 96% 53%)" /> {/* google-yellow */}
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid lines */}
      {[40, 80, 120].map((y, i) => (
        <motion.line
          key={y}
          x1="20"
          y1={y}
          x2="340"
          y2={y}
          stroke="hsl(var(--border))"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        />
      ))}

      {/* Area fill */}
      <motion.path
        d={areaPath}
        fill="url(#areaGradient)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />

      {/* Main line with draw-in effect */}
      <motion.path
        d={linePath}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Data points */}
      {[
        { x: 20, y: 140, delay: 0.3 },
        { x: 100, y: 110, delay: 0.6 },
        { x: 180, y: 80, delay: 0.9 },
        { x: 260, y: 50, delay: 1.2 },
        { x: 340, y: 30, delay: 1.5 },
      ].map((point, i) => (
        <motion.g key={i}>
          {/* Outer glow ring */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill="hsl(var(--primary))"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: [0, 1.5, 1] } : { scale: 0 }}
            transition={{ delay: point.delay, duration: 0.5 }}
          />
          {/* Main point */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="5"
            fill="hsl(var(--background))"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: point.delay, duration: 0.3, type: "spring" }}
          />
        </motion.g>
      ))}

      {/* Y-axis labels */}
      {[
        { y: 40, label: "100%" },
        { y: 80, label: "75%" },
        { y: 120, label: "50%" },
      ].map((item, i) => (
        <motion.text
          key={i}
          x="10"
          y={item.y + 4}
          fontSize="8"
          fill="hsl(var(--muted-foreground))"
          textAnchor="end"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
        >
          {item.label}
        </motion.text>
      ))}
    </svg>
  );
}
