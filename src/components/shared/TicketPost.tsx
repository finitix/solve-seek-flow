import { Link } from "react-router-dom";
import { Heart, MessageCircle, Share2, CheckCircle, Star } from "lucide-react";
import { Ticket } from "@/data/mockData";
import { useState } from "react";

interface TicketPostProps {
  ticket: Ticket;
}

const TicketPost = ({ ticket }: TicketPostProps) => {
  const [likes, setLikes] = useState(ticket.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="content-card animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">
              {ticket.userName.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium">{ticket.userName}</p>
            <p className="text-xs text-muted-foreground">{ticket.createdAt}</p>
          </div>
        </div>
        <span className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
          <CheckCircle size={12} />
          Solved
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg">{ticket.title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">{ticket.description}</p>
        
        <div className="mt-3 flex items-center gap-2">
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
            {ticket.category}
          </span>
        </div>
      </div>

      {/* Solution */}
      {ticket.solution && (
        <div className="mt-4 bg-success/5 border border-success/20 rounded-lg p-4">
          <p className="text-sm font-medium text-success mb-2">💡 Solution</p>
          <p className="text-sm text-muted-foreground">{ticket.solution}</p>
        </div>
      )}

      {/* Trainer Info */}
      {ticket.trainerName && (
        <Link to={`/trainer/${ticket.trainerId}`} className="block mt-4 border border-border rounded-lg p-3 hover:border-primary/30 transition-colors">
          <p className="text-xs text-muted-foreground mb-1">Solved by</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-medium">
                {ticket.trainerName.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-sm">{ticket.trainerName}</p>
              <div className="flex items-center gap-1">
                <Star className="text-warning fill-warning" size={12} />
                <span className="text-xs text-muted-foreground">Verified Trainer</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-border flex items-center gap-6">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 text-sm transition-colors ${
            liked ? "text-destructive" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart size={18} className={liked ? "fill-current" : ""} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <MessageCircle size={18} />
          <span>{ticket.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Share2 size={18} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default TicketPost;
