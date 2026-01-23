import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, CheckCircle, Star, Sparkles, ExternalLink } from "lucide-react";
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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="ultra-card group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-xl shadow-primary/30"
          >
            <span className="text-white font-black text-xl">
              {ticket.userName.charAt(0)}
            </span>
          </motion.div>
          <div>
            <p className="font-bold text-lg">{ticket.userName}</p>
            <p className="text-sm text-muted-foreground">{ticket.createdAt}</p>
          </div>
        </div>
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="status-badge status-solved flex items-center gap-1.5"
        >
          <CheckCircle size={14} />
          Solved
        </motion.span>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="font-bold text-xl md:text-2xl group-hover:gradient-text transition-all duration-500">{ticket.title}</h3>
        <p className="text-muted-foreground mt-4 leading-relaxed text-lg">{ticket.description}</p>
        
        <motion.div 
          className="mt-5 inline-flex"
          whileHover={{ scale: 1.05, x: 5 }}
        >
          <span className="px-5 py-2.5 rounded-2xl text-sm font-bold gradient-bg text-white shadow-lg shadow-primary/30">
            {ticket.category}
          </span>
        </motion.div>
      </div>

      {/* Solution */}
      {ticket.solution && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gradient-to-br from-success/5 via-success/10 to-success/5 border border-success/20 rounded-3xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-3xl" />
          <p className="text-base font-bold text-success mb-3 flex items-center gap-2 relative">
            <Sparkles size={18} />
            Solution
          </p>
          <p className="text-muted-foreground leading-relaxed text-base relative">{ticket.solution}</p>
        </motion.div>
      )}

      {/* Trainer Info */}
      {ticket.trainerName && (
        <Link to={`/trainer/${ticket.trainerId}`}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-6 border-2 border-border/50 rounded-2xl p-5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 group/trainer flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold">
                  {ticket.trainerName.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-0.5">Solved by</p>
                <p className="font-bold text-lg">{ticket.trainerName}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="text-warning fill-warning" size={14} />
                  <span className="text-xs text-muted-foreground font-semibold">Verified Trainer</span>
                </div>
              </div>
            </div>
            <ExternalLink size={20} className="text-muted-foreground group-hover/trainer:text-primary transition-colors" />
          </motion.div>
        </Link>
      )}

      {/* Actions */}
      <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-10">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleLike}
          className={`flex items-center gap-3 text-base font-semibold transition-all duration-300 ${
            liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
          }`}
        >
          <motion.div
            animate={liked ? { scale: [1, 1.4, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Heart size={22} className={liked ? "fill-current" : ""} />
          </motion.div>
          <span>{likes}</span>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle size={22} />
          <span>{ticket.comments}</span>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <Share2 size={22} />
          <span>Share</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TicketPost;
