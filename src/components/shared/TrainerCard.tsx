import { Link } from "react-router-dom";
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
    <div className="ultra-card group">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Avatar with real image */}
        <div className="relative flex-shrink-0">
          {trainer.avatar ? (
            <img 
              src={trainer.avatar} 
              alt={trainer.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover"
            />
          ) : (
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-bg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg sm:text-xl">
                {trainer.name.charAt(0)}
              </span>
            </div>
          )}
          {trainer.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center">
              <Verified size={12} className="text-primary" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Link 
              to={`/trainer/${trainer.id}`} 
              className="font-bold text-base sm:text-lg hover:text-primary transition-colors truncate"
            >
              {trainer.name}
            </Link>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 mt-1.5">
            <div className="flex items-center gap-1 bg-warning/10 px-2 py-1 rounded-lg border border-warning/20">
              <Star className="text-warning fill-warning" size={12} />
              <span className="text-xs font-semibold text-warning">{trainer.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({trainer.reviews} reviews)
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 mt-3">
            {trainer.skills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
          <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 mt-4 pt-4 border-t border-border/50 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
            <CheckCircle size={14} className="text-success" />
          </div>
          <span className="font-medium">{trainer.solvedTickets} solved</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock size={14} className="text-primary" />
          </div>
          <span className="font-medium hidden sm:inline">{trainer.experience}</span>
          <span className="font-medium sm:hidden">{trainer.experience.split(' ')[0]}y</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground hidden xs:flex">
          <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
            <DollarSign size={14} className="text-warning" />
          </div>
          <span className="font-medium">${trainer.hourlyRate}/hr</span>
        </div>
      </div>

      {showSelectButton && onSelect && (
        <div className="mt-4">
          <Button 
            className="w-full h-11" 
            variant="hero"
            onClick={() => onSelect(trainer)}
          >
            Select Trainer
          </Button>
        </div>
      )}
    </div>
  );
};

export default TrainerCard;
