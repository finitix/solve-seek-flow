import { Link } from "react-router-dom";
import { Star, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Trainer } from "@/data/mockData";

interface TrainerCardProps {
  trainer: Trainer;
  onSelect?: (trainer: Trainer) => void;
  showSelectButton?: boolean;
}

const TrainerCard = ({ trainer, onSelect, showSelectButton = false }: TrainerCardProps) => {
  return (
    <div className="content-card hover:border-primary/30 transition-colors animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground text-xl font-semibold">
            {trainer.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Link to={`/trainer/${trainer.id}`} className="font-semibold hover:text-primary transition-colors">
              {trainer.name}
            </Link>
            {trainer.verified && (
              <CheckCircle className="text-success" size={16} />
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Star className="text-warning fill-warning" size={14} />
            <span className="text-sm font-medium">{trainer.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({trainer.reviews} reviews)
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {trainer.skills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <CheckCircle size={14} />
          <span>{trainer.solvedTickets} solved</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{trainer.experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign size={14} />
          <span>${trainer.hourlyRate}/hr</span>
        </div>
      </div>

      {showSelectButton && onSelect && (
        <Button className="w-full mt-4" onClick={() => onSelect(trainer)}>
          Select Trainer
        </Button>
      )}
    </div>
  );
};

export default TrainerCard;
