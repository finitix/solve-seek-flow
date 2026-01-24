import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TicketPost from "@/components/shared/TicketPost";
import TrainerCard from "@/components/shared/TrainerCard";
import SearchBar from "@/components/shared/SearchBar";
import { solvedTickets, trainers } from "@/data/mockData";
import { TrendingUp, Sparkles, Zap, ArrowRight, Star, Users, Award, Clock, CheckCircle, Play } from "lucide-react";

// Import images
import heroBg from "@/assets/hero-bg.jpg";
import communityIllustration from "@/assets/community-illustration.png";
import featureTicket from "@/assets/feature-ticket.png";
import featureTrainer from "@/assets/feature-trainer.png";
import featureChat from "@/assets/feature-chat.png";

const Index = () => {
  const [filteredTickets, setFilteredTickets] = useState(solvedTickets);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (query: string, category: string) => {
    setSearchPerformed(true);
    let results = solvedTickets;

    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(lowerQuery) ||
          t.description.toLowerCase().includes(lowerQuery) ||
          t.category.toLowerCase().includes(lowerQuery) ||
          t.trainerName?.toLowerCase().includes(lowerQuery)
      );
    }

    if (category && category !== "all") {
      results = results.filter((t) => t.category === category);
    }

    setFilteredTickets(results);
  };

  const features = [
    {
      image: featureTicket,
      title: "Create Ticket",
      description: "Describe your tech problem and submit a ticket in seconds.",
    },
    {
      image: featureTrainer,
      title: "Choose Your Trainer",
      description: "Get matched with verified experts based on your needs.",
    },
    {
      image: featureChat,
      title: "Chat & Solve",
      description: "Work directly with your trainer through secure chat.",
    },
  ];

  const stats = [
    { value: "10K+", label: "Problems Solved", icon: Award },
    { value: "500+", label: "Expert Trainers", icon: Users },
    { value: "98%", label: "Satisfaction", icon: Star },
    { value: "< 5min", label: "Response", icon: Clock },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Startup Founder",
      content: "TechSolve saved our company. We had a critical server issue at 2 AM and got help within minutes!",
      rating: 5,
    },
    {
      name: "James K.",
      role: "Freelance Designer",
      content: "Finally, tech support that actually understands creative software. Highly recommended!",
      rating: 5,
    },
    {
      name: "Maria L.",
      role: "Small Business Owner",
      content: "The trainers are incredibly patient and knowledgeable. Worth every penny.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col bg-background"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-16 md:pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Trusted by 10,000+ users</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              >
                Tech Problems?{" "}
                <span className="gradient-text">Solved Instantly.</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
              >
                Connect with verified tech experts, get personalized solutions, and join a community of problem solvers.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Link to="/signup" className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2">
                    <Zap size={18} />
                    Get Started Free
                  </Button>
                </Link>
                <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <Play size={16} className="text-white ml-0.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Watch</p>
                    <p className="font-semibold text-sm">How It Works</p>
                  </div>
                </button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                {["Free to start", "24/7 Support", "Verified Experts"].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-success" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img 
                src={communityIllustration} 
                alt="Tech community collaboration" 
                className="w-full max-w-md mx-auto"
              />
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-4 top-1/4 glass-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <CheckCircle size={18} className="text-success" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">10K+</p>
                    <p className="text-xs text-muted-foreground">Solved</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 glass-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <Star size={18} className="text-warning fill-warning" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">4.9</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-card/50 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-bg mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 md:py-12 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Search Our <span className="gradient-text">Solution Library</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Find answers from thousands of solved problems</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>
        </div>
      </section>

      {/* Feed Section */}
      <section className="py-12 md:py-20 flex-1">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Feed */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6 md:mb-8"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    {searchPerformed ? "Search Results" : "Recently Solved"}
                  </h2>
                  <p className="text-sm text-muted-foreground">Explore solutions from our community</p>
                </div>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6"
              >
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket, index) => (
                    <motion.div
                      key={ticket.id}
                      variants={itemVariants}
                    >
                      <TicketPost ticket={ticket} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    variants={itemVariants}
                    className="text-center py-12 ultra-card"
                  >
                    <p className="text-muted-foreground">No results found. Try a different search term.</p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-24"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-success/10 flex items-center justify-center border border-success/20">
                    <Users size={20} className="text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">Top Trainers</h3>
                    <p className="text-sm text-muted-foreground">Verified experts</p>
                  </div>
                </div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {trainers.slice(0, 3).map((trainer, index) => (
                    <motion.div
                      key={trainer.id}
                      variants={itemVariants}
                    >
                      <TrainerCard trainer={trainer} />
                    </motion.div>
                  ))}
                </motion.div>

                <Link to="/trainers" className="block mt-6">
                  <Button variant="outline" className="w-full group h-12">
                    View All Trainers
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 border border-primary/20">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Get your tech problems solved in three simple steps
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="ultra-card text-center h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {index + 1}
                  </div>

                  {/* Feature Image */}
                  <div className="mt-4 mb-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
              What Our <span className="gradient-text">Users Say</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">Join thousands of satisfied users</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="ultra-card"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-warning fill-warning" />
                  ))}
                </div>

                <p className="text-sm sm:text-base leading-relaxed mb-4">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 relative text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to Solve Your Problem?
            </h2>
            <p className="mt-4 md:mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Join thousands of users who have already found solutions with our verified trainers.
            </p>
            <div className="mt-8">
              <Link to="/signup">
                <Button variant="glass" size="lg" className="group">
                  Start Now — It's Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Index;
