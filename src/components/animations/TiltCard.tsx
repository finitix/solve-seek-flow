import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
}

const TiltCard = ({ 
  children, 
  className = "", 
  tiltAmount = 10,
  glareEnabled = true 
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = ((e.clientY - centerY) / (rect.height / 2)) * -tiltAmount;
    const y = ((e.clientX - centerX) / (rect.width / 2)) * tiltAmount;
    
    setTilt({ x, y });
    setGlarePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      
      {/* Glare effect */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden rounded-2xl md:rounded-3xl"
          animate={{
            opacity: tilt.x !== 0 || tilt.y !== 0 ? 0.15 : 0,
          }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, white 0%, transparent 50%)`,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default TiltCard;
