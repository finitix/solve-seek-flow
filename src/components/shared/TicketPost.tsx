import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="ultra-card group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 5 }}
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
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSaved(!saved)}
            className={`p-2 rounded-xl transition-colors ${saved ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
          >
            <BookmarkPlus size={20} className={saved ? 'fill-current' : ''} />
          </motion.button>
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="status-badge status-solved flex items-center gap-1.5"
          >
            <CheckCircle size={14} />
            Solved
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="font-bold text-xl md:text-2xl group-hover:gradient-text transition-all duration-500 leading-tight">{ticket.title}</h3>
        <p className="text-muted-foreground mt-4 leading-relaxed text-base">{ticket.description}</p>
        
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
          className="mt-6 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-success/10 via-success/5 to-transparent" />
          <div className="relative border border-success/20 rounded-3xl p-6">
            <p className="text-base font-bold text-success mb-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              Solution
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">{ticket.solution}</p>
          </div>
        </motion.div>
      )}

      {/* Trainer Info */}
      {ticket.trainerName && (
        <Link to={`/trainer/${ticket.trainerId}`}>
          <motion.div 
            whileHover={{ scale: 1.02, x: 5 }}
            className="mt-6 border-2 border-border/50 rounded-2xl p-5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 group/trainer flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              {ticket.trainerAvatar ? (
                <img 
                  src={ticket.trainerAvatar} 
                  alt={ticket.trainerName}
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                />
              ) : (
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-white font-bold text-lg">
                    {ticket.trainerName.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-0.5">Solved by</p>
                <p className="font-bold text-lg">{ticket.trainerName}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="text-warning fill-warning" size={14} />
                  <span className="text-xs text-muted-foreground font-semibold">Verified Trainer</span>
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center opacity-0 group-hover/trainer:opacity-100 transition-opacity"
            >
              <ExternalLink size={18} className="text-primary" />
            </motion.div>
          </motion.div>
        </Link>
      )}

      {/* Actions */}
      <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleLike}
            className={`flex items-center gap-2.5 text-base font-semibold transition-all duration-300 ${
              liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
            }`}
          >
            <motion.div
              animate={liked ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center"
            >
              <Heart size={20} className={liked ? "fill-current" : ""} />
            </motion.div>
            <span>{likes}</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2.5 text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <span>{ticket.comments}</span>
          </motion.button>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2.5 text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <Share2 size={20} />
          </div>
          <span className="hidden sm:inline">Share</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TicketPost;
