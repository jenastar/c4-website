import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BarData {
  value: number;
  label: string;
  color: string;
}

interface AnimatedBarChartProps {
  data?: BarData[];
  className?: string;
}

const defaultData: BarData[] = [
  { value: 50, label: "Projects", color: "hsl(217 91% 60%)" },
  { value: 95, label: "On-time", color: "hsl(142 71% 45%)" },
  { value: 75, label: "Faster", color: "hsl(48 96% 53%)" },
  { value: 40, label: "Savings", color: "hsl(4 90% 58%)" },
];

export function AnimatedBarChart({ data = defaultData, className = "" }: AnimatedBarChartProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = 40;
  const gap = 30;
  const chartHeight = 120;
  const chartWidth = data.length * (barWidth + gap) - gap + 40;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${chartWidth} ${chartHeight + 40}`}
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {data.map((bar, i) => (
          <linearGradient key={i} id={`barGradient${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={bar.color} stopOpacity="1" />
            <stop offset="100%" stopColor={bar.color} stopOpacity="0.6" />
          </linearGradient>
        ))}
      </defs>

      {/* Background grid */}
      {[0.25, 0.5, 0.75, 1].map((percent, i) => (
        <motion.line
          key={i}
          x1="20"
          y1={chartHeight - chartHeight * percent}
          x2={chartWidth - 20}
          y2={chartHeight - chartHeight * percent}
          stroke="hsl(var(--border))"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        />
      ))}

      {/* Bars */}
      {data.map((bar, i) => {
        const barHeight = (bar.value / maxValue) * chartHeight;
        const x = 20 + i * (barWidth + gap);
        const y = chartHeight - barHeight;

        return (
          <motion.g key={i}>
            {/* Bar shadow */}
            <motion.rect
              x={x + 2}
              y={chartHeight}
              width={barWidth}
              height={0}
              rx="4"
              fill="hsl(var(--foreground))"
              opacity="0.1"
              initial={{ height: 0, y: chartHeight }}
              animate={isInView ? { height: barHeight, y } : { height: 0, y: chartHeight }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Main bar */}
            <motion.rect
              x={x}
              y={chartHeight}
              width={barWidth}
              height={0}
              rx="4"
              fill={`url(#barGradient${i})`}
              initial={{ height: 0, y: chartHeight }}
              animate={isInView ? { height: barHeight, y } : { height: 0, y: chartHeight }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: "easeOut" }}
            />

            {/* Value label */}
            <motion.text
              x={x + barWidth / 2}
              y={y - 8}
              fontSize="12"
              fontWeight="bold"
              fill="hsl(var(--foreground))"
              textAnchor="middle"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.3 }}
            >
              {bar.value}
              {bar.label === "On-time" ? "%" : bar.label === "Faster" ? "x" : bar.label === "Savings" ? "%" : "+"}
            </motion.text>

            {/* Label */}
            <motion.text
              x={x + barWidth / 2}
              y={chartHeight + 20}
              fontSize="10"
              fill="hsl(var(--muted-foreground))"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
            >
              {bar.label}
            </motion.text>
          </motion.g>
        );
      })}
    </svg>
  );
}
