import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: string;
  x?: string;
  y?: string;
  delay?: number;
}

const GlowingOrb = ({ 
  size = 300, 
  color = "hsl(258, 90%, 60%)", 
  x = "50%", 
  y = "50%",
  delay = 0 
}: GlowingOrbProps) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingOrb;
