import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning";
}

const StatCard = ({ title, value, icon: Icon, variant = "default" }: StatCardProps) => {
  const variants = {
    default: {
      bg: "bg-card",
      iconBg: "bg-muted",
      iconColor: "text-muted-foreground",
      border: "border-border",
    },
    primary: {
      bg: "bg-gradient-to-br from-primary/5 to-accent/5",
      iconBg: "gradient-bg",
      iconColor: "text-white",
      border: "border-primary/20",
    },
    success: {
      bg: "bg-gradient-to-br from-success/5 to-success/10",
      iconBg: "bg-success",
      iconColor: "text-white",
      border: "border-success/20",
    },
    warning: {
      bg: "bg-gradient-to-br from-warning/5 to-warning/10",
      iconBg: "bg-warning",
      iconColor: "text-white",
      border: "border-warning/20",
    },
  };

  const style = variants[variant];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`${style.bg} rounded-2xl border ${style.border} p-6 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <motion.p 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-3xl font-bold mt-2 gradient-text"
          >
            {value}
          </motion.p>
        </div>
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`p-4 rounded-2xl ${style.iconBg} ${style.iconColor} shadow-lg`}
        >
          <Icon size={28} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatCard;
