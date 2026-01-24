import { motion } from "framer-motion";
import { Sparkles, Star, Zap, Heart, Code, Shield } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, x: "10%", y: "20%", delay: 0, duration: 6 },
    { Icon: Star, x: "85%", y: "15%", delay: 1, duration: 7 },
    { Icon: Zap, x: "75%", y: "70%", delay: 2, duration: 5 },
    { Icon: Heart, x: "15%", y: "75%", delay: 0.5, duration: 8 },
    { Icon: Code, x: "90%", y: "45%", delay: 1.5, duration: 6.5 },
    { Icon: Shield, x: "5%", y: "50%", delay: 2.5, duration: 7.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0.2, 0.4, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
            y: [0, -30, -15, -30, 0],
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <el.Icon
            size={24}
            className="text-primary/30"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
