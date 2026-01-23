import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, CheckCircle, Clock, DollarSign, ArrowRight, Verified } from "lucide-react";
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
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="ultra-card group"
    >
      <div className="flex items-start gap-4">
        <motion.div 
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-xl shadow-primary/40 flex-shrink-0"
        >
          <span className="text-white font-black text-2xl">
            {trainer.name.charAt(0)}
          </span>
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Link 
              to={`/trainer/${trainer.id}`} 
              className="font-bold text-xl group-hover:gradient-text transition-all duration-500"
            >
              {trainer.name}
            </Link>
            {trainer.verified && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-md" />
                <Verified size={22} className="text-primary fill-primary/20 relative" />
              </motion.div>
            )}
          </div>
          
          <div className="flex items-center gap-3 mt-3">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-1.5 bg-gradient-to-r from-warning/20 to-warning/10 px-3 py-1.5 rounded-full border border-warning/30"
            >
              <Star className="text-warning fill-warning" size={14} />
              <span className="text-sm font-bold text-warning">{trainer.rating}</span>
            </motion.div>
            <span className="text-sm text-muted-foreground font-medium">
              ({trainer.reviews} reviews)
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {trainer.skills.slice(0, 2).map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10"
        >
          <ArrowRight size={20} className="text-primary" />
        </motion.div>
      </div>

      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/50 text-sm">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2.5 text-muted-foreground"
        >
          <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
            <CheckCircle size={18} className="text-success" />
          </div>
          <span className="font-semibold">{trainer.solvedTickets} solved</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2.5 text-muted-foreground"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Clock size={18} className="text-primary" />
          </div>
          <span className="font-semibold">{trainer.experience}</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2.5 text-muted-foreground"
        >
          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
            <DollarSign size={18} className="text-warning" />
          </div>
          <span className="font-semibold">${trainer.hourlyRate}/hr</span>
        </motion.div>
      </div>

      {showSelectButton && onSelect && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6"
        >
          <Button 
            className="w-full h-14 text-base" 
            variant="hero"
            onClick={() => onSelect(trainer)}
          >
            Select Trainer
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TrainerCard;
