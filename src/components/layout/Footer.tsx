import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
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
    <footer ref={ref} className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      
      <div className="relative border-t border-border/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            {/* Logo & Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center gradient-bg shadow-xl shadow-primary/30">
                  <Sparkles className="text-white" size={22} />
                </div>
                <span className="font-black text-2xl tracking-tight">
                  Tech<span className="gradient-text">Solve</span>
                </span>
              </div>
              <p className="text-muted-foreground mt-4 text-sm max-w-xs mx-auto md:mx-0">
                Connecting tech problems with expert solutions. Your community-powered support platform.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-8"
            >
              {footerLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
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
              className="flex items-center justify-center md:justify-end gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-muted hover:gradient-bg hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/30"
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
            className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-muted-foreground text-sm">
              © 2024 TechSolve. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Crafted with <span className="text-primary">♥</span> for problem solvers everywhere
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
