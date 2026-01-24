import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ value, duration = 2, className = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract number and suffix
    const match = value.match(/^([<>]?\s*)(\d+\.?\d*)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const numericValue = parseFloat(match[2]);
    const suffix = match[3] || "";

    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function (ease out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = numericValue * easeOut;
      
      // Format based on original value
      let formatted: string;
      if (Number.isInteger(numericValue)) {
        formatted = Math.round(currentValue).toString();
      } else {
        formatted = currentValue.toFixed(1);
      }
      
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;
