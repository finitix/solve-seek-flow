import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="font-semibold text-foreground">TechSolve</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 TechSolve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
