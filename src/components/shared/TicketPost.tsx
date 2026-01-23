import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, CheckCircle, Star, Sparkles } from "lucide-react";
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
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="premium-card group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <span className="text-white font-bold text-lg">
              {ticket.userName.charAt(0)}
            </span>
          </motion.div>
          <div>
            <p className="font-semibold text-lg">{ticket.userName}</p>
            <p className="text-sm text-muted-foreground">{ticket.createdAt}</p>
          </div>
        </div>
        <motion.span 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-success/10 text-success text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-success/20"
        >
          <CheckCircle size={14} />
          Solved
        </motion.span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{ticket.title}</h3>
        <p className="text-muted-foreground mt-3 leading-relaxed">{ticket.description}</p>
        
        <motion.div 
          className="mt-4 flex items-center gap-2"
          whileHover={{ x: 4 }}
        >
          <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-semibold px-4 py-2 rounded-full border border-primary/20">
            {ticket.category}
          </span>
        </motion.div>
      </div>

      {/* Solution */}
      {ticket.solution && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 bg-gradient-to-br from-success/5 to-success/10 border border-success/20 rounded-2xl p-5"
        >
          <p className="text-sm font-semibold text-success mb-2 flex items-center gap-2">
            <Sparkles size={16} />
            Solution
          </p>
          <p className="text-muted-foreground leading-relaxed">{ticket.solution}</p>
        </motion.div>
      )}

      {/* Trainer Info */}
      {ticket.trainerName && (
        <Link to={`/trainer/${ticket.trainerId}`}>
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            className="mt-5 border border-border/50 rounded-2xl p-4 hover:border-primary/30 hover:bg-muted/30 transition-all duration-300"
          >
            <p className="text-xs text-muted-foreground mb-2 font-medium">Solved by</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-bold">
                  {ticket.trainerName.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold">{ticket.trainerName}</p>
                <div className="flex items-center gap-1.5">
                  <Star className="text-warning fill-warning" size={14} />
                  <span className="text-xs text-muted-foreground font-medium">Verified Trainer</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      )}

      {/* Actions */}
      <div className="mt-5 pt-5 border-t border-border/50 flex items-center gap-8">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className={`flex items-center gap-2.5 text-sm font-medium transition-all duration-300 ${
            liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
          }`}
        >
          <motion.div
            animate={liked ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart size={20} className={liked ? "fill-current" : ""} />
          </motion.div>
          <span>{likes}</span>
        </motion.button>

        <button className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle size={20} />
          <span>{ticket.comments}</span>
        </button>

        <button className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>
    </motion.div>
  );
};

export default TicketPost;
