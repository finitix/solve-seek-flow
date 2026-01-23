import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center gradient-bg shadow-lg shadow-primary/30"
            >
              <Sparkles className="text-white" size={20} />
            </motion.div>
            <span className="font-bold text-xl tracking-tight">
              Tech<span className="gradient-text">Solve</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/#how-it-works" className="nav-link">How it Works</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4 border-t border-border/50">
                <Link to="/" className="block py-3 px-4 rounded-xl hover:bg-muted transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/#how-it-works" className="block py-3 px-4 rounded-xl hover:bg-muted transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  How it Works
                </Link>
                <Link to="/login" className="block py-3 px-4 rounded-xl hover:bg-muted transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full mt-2">Get Started</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
