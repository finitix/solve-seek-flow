import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, CheckCircle, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Trainer } from "@/data/mockData";

interface TrainerCardProps {
  trainer: Trainer;
  onSelect?: (trainer: Trainer) => void;
  showSelectButton?: boolean;
}

const TrainerCard = ({ trainer, onSelect, showSelectButton = false }: TrainerCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="premium-card group"
    >
      <div className="flex items-start gap-4">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0"
        >
          <span className="text-white font-bold text-xl">
            {trainer.name.charAt(0)}
          </span>
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Link 
              to={`/trainer/${trainer.id}`} 
              className="font-bold text-lg group-hover:text-primary transition-colors"
            >
              {trainer.name}
            </Link>
            {trainer.verified && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-success"
              >
                <CheckCircle size={18} className="fill-success/20" />
              </motion.div>
            )}
          </div>
          
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1.5 bg-warning/10 px-2.5 py-1 rounded-full">
              <Star className="text-warning fill-warning" size={14} />
              <span className="text-sm font-semibold text-warning">{trainer.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({trainer.reviews} reviews)
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {trainer.skills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowRight size={20} className="text-primary" />
        </motion.div>
      </div>

      <div className="flex items-center gap-6 mt-5 pt-5 border-t border-border/50 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
            <CheckCircle size={16} className="text-success" />
          </div>
          <span className="font-medium">{trainer.solvedTickets} solved</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock size={16} className="text-primary" />
          </div>
          <span className="font-medium">{trainer.experience}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
            <DollarSign size={16} className="text-warning" />
          </div>
          <span className="font-medium">${trainer.hourlyRate}/hr</span>
        </div>
      </div>

      {showSelectButton && onSelect && (
        <Button 
          className="w-full mt-5" 
          variant="hero"
          onClick={() => onSelect(trainer)}
        >
          Select Trainer
        </Button>
      )}
    </motion.div>
  );
};

export default TrainerCard;
