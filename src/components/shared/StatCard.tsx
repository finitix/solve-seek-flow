import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning";
}

const StatCard = ({ title, value, icon: Icon, variant = "default" }: StatCardProps) => {
  const variants = {
    default: "bg-card",
    primary: "bg-primary/5 border-primary/20",
    success: "bg-success/5 border-success/20",
    warning: "bg-warning/5 border-warning/20",
  };

  const iconVariants = {
    default: "text-muted-foreground",
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
  };

  return (
    <div className={`content-card ${variants[variant]} animate-fade-in`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg bg-secondary ${iconVariants[variant]}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
