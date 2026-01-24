import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg gradient-bg flex items-center justify-center shadow-md">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold">TechSolve</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="nav-link text-sm">
              Home
            </Link>
            <a href="/#how-it-works" className="nav-link text-sm">
              How It Works
            </a>
            <Link to="/trainers" className="nav-link text-sm">
              Trainers
            </Link>
            <Link to="/login" className="nav-link text-sm">
              Login
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm" className="gap-1.5">
                <Sparkles size={14} />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="py-4 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2.5 rounded-lg hover:bg-muted transition-colors font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <a
                  href="/#how-it-works"
                  className="block px-3 py-2.5 rounded-lg hover:bg-muted transition-colors font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <Link
                  to="/trainers"
                  className="block px-3 py-2.5 rounded-lg hover:bg-muted transition-colors font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trainers
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-2.5 rounded-lg hover:bg-muted transition-colors font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <div className="pt-2 px-3">
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="hero" className="w-full gap-2">
                      <Sparkles size={16} />
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
