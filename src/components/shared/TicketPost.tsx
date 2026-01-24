import { Link } from "react-router-dom";
import { Heart, MessageCircle, Share2, CheckCircle, Star, Sparkles, ExternalLink, BookmarkPlus } from "lucide-react";
import { Ticket } from "@/data/mockData";
import { useState } from "react";

interface TicketPostProps {
  ticket: Ticket;
}

const TicketPost = ({ ticket }: TicketPostProps) => {
  const [likes, setLikes] = useState(ticket.likes);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="ultra-card group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-base sm:text-lg">
              {ticket.userName.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-sm sm:text-base">{ticket.userName}</p>
            <p className="text-xs text-muted-foreground">{ticket.createdAt}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSaved(!saved)}
            className={`p-2 rounded-lg transition-colors ${saved ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground'}`}
          >
            <BookmarkPlus size={18} className={saved ? 'fill-current' : ''} />
          </button>
          <span className="status-badge status-solved flex items-center gap-1.5 text-xs">
            <CheckCircle size={12} />
            <span className="hidden sm:inline">Solved</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="font-bold text-base sm:text-lg md:text-xl leading-snug">{ticket.title}</h3>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed line-clamp-3">{ticket.description}</p>
        
        <div className="mt-3">
          <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold gradient-bg text-white">
            {ticket.category}
          </span>
        </div>
      </div>

      {/* Solution */}
      {ticket.solution && (
        <div className="mt-4 rounded-xl bg-success/5 border border-success/20 p-4">
          <p className="text-sm font-semibold text-success mb-2 flex items-center gap-2">
            <Sparkles size={14} />
            Solution
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{ticket.solution}</p>
        </div>
      )}

      {/* Trainer Info */}
      {ticket.trainerName && (
        <Link to={`/trainer/${ticket.trainerId}`}>
          <div className="mt-4 border border-border/50 rounded-xl p-3 sm:p-4 hover:border-primary/30 hover:bg-primary/5 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-3">
              {ticket.trainerAvatar ? (
                <img 
                  src={ticket.trainerAvatar} 
                  alt={ticket.trainerName}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover"
                />
              ) : (
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold">
                    {ticket.trainerName.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p className="text-xs text-muted-foreground">Solved by</p>
                <p className="font-semibold text-sm sm:text-base">{ticket.trainerName}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="text-warning fill-warning" size={12} />
                  <span className="text-xs text-muted-foreground">Verified</span>
                </div>
              </div>
            </div>
            <ExternalLink size={16} className="text-muted-foreground" />
          </div>
        </Link>
      )}

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-5">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
              <Heart size={16} className={liked ? "fill-current" : ""} />
            </div>
            <span>{likes}</span>
          </button>

          <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageCircle size={16} />
            </div>
            <span>{ticket.comments}</span>
          </button>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
            <Share2 size={16} />
          </div>
          <span className="hidden sm:inline">Share</span>
        </button>
      </div>
    </div>
  );
};

export default TicketPost;
