import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      
      <div className="relative border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center gradient-bg shadow-lg shadow-primary/30">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Tech<span className="gradient-text">Solve</span>
              </span>
            </motion.div>

            {/* Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-8"
            >
              {footerLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-8 border-t border-border/50 text-center"
          >
            <p className="text-muted-foreground text-sm">
              © 2024 TechSolve. Crafted with ✨ for problem solvers everywhere.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
