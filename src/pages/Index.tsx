import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TicketPost from "@/components/shared/TicketPost";
import TrainerCard from "@/components/shared/TrainerCard";
import SearchBar from "@/components/shared/SearchBar";
import { solvedTickets, trainers } from "@/data/mockData";
import { TrendingUp, Sparkles, Zap, ArrowRight, Star, Users, Award, Clock, CheckCircle, Play, Shield, Rocket, MessageCircle } from "lucide-react";

// Animation components
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import ParticleField from "@/components/animations/ParticleField";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import ScrollProgress from "@/components/animations/ScrollProgress";
import FloatingElements from "@/components/animations/FloatingElements";
import GlowingOrb from "@/components/animations/GlowingOrb";
import TiltCard from "@/components/animations/TiltCard";

// Import images
import heroBg from "@/assets/hero-bg.jpg";
import communityIllustration from "@/assets/community-illustration.png";
import featureTicket from "@/assets/feature-ticket.png";
import featureTrainer from "@/assets/feature-trainer.png";
import featureChat from "@/assets/feature-chat.png";

const Index = () => {
  const [filteredTickets, setFilteredTickets] = useState(solvedTickets);
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
      icon: Rocket,
    },
    {
      image: featureTrainer,
      title: "Choose Your Trainer",
      description: "Get matched with verified experts based on your needs.",
      icon: Shield,
    },
    {
      image: featureChat,
      title: "Chat & Solve",
      description: "Work directly with your trainer through secure chat.",
      icon: MessageCircle,
    },
  ];

  const stats = [
    { value: "10000", suffix: "+", label: "Problems Solved", icon: Award },
    { value: "500", suffix: "+", label: "Expert Trainers", icon: Users },
    { value: "98", suffix: "%", label: "Satisfaction", icon: Star },
    { value: "5", prefix: "< ", suffix: "min", label: "Response", icon: Clock },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Startup Founder",
      content: "TechSolve saved our company. We had a critical server issue at 2 AM and got help within minutes!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "James K.",
      role: "Freelance Designer",
      content: "Finally, tech support that actually understands creative software. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Maria L.",
      role: "Small Business Owner",
      content: "The trainers are incredibly patient and knowledgeable. Worth every penny.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  const benefits = [
    { icon: Zap, title: "Lightning Fast", description: "Get responses in under 5 minutes" },
    { icon: Shield, title: "100% Secure", description: "Your data is always protected" },
    { icon: Award, title: "Verified Experts", description: "All trainers are vetted professionals" },
    { icon: Clock, title: "24/7 Available", description: "Support whenever you need it" },
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col bg-background relative"
    >
      <ScrollProgress />
      <ParticleField />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover"
            style={{ y: heroY }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        </div>

        {/* Animated Background Elements */}
        <FloatingElements />
        <GlowingOrb x="20%" y="30%" size={400} color="hsl(258, 90%, 60%)" delay={0} />
        <GlowingOrb x="80%" y="60%" size={350} color="hsl(310, 80%, 55%)" delay={2} />
        <GlowingOrb x="50%" y="80%" size={300} color="hsl(200, 90%, 50%)" delay={4} />

        <motion.div 
          className="container mx-auto px-4 sm:px-6 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={16} className="text-primary" />
                </motion.div>
                <span className="text-xs sm:text-sm font-medium text-primary">Trusted by 10,000+ users</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              >
                <TextReveal delay={0.2}>Tech Problems?</TextReveal>{" "}
                <span className="gradient-text-animated block sm:inline">
                  <TextReveal delay={0.4}>Solved Instantly.</TextReveal>
                </span>
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
                <MagneticButton strength={0.2}>
                  <Link to="/signup" className="w-full sm:w-auto">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2 group relative overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">
                        <Zap size={18} />
                        Get Started Free
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </Button>
                  </Link>
                </MagneticButton>
                
                <MagneticButton strength={0.15}>
                  <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 group">
                    <motion.div 
                      className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={16} className="text-white ml-0.5" />
                    </motion.div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Watch</p>
                      <p className="font-semibold text-sm">How It Works</p>
                    </div>
                  </button>
                </MagneticButton>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                {["Free to start", "24/7 Support", "Verified Experts"].map((text, index) => (
                  <motion.div 
                    key={text} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle size={16} className="text-success" />
                    </motion.div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:block"
            >
              <motion.img 
                src={communityIllustration} 
                alt="Tech community collaboration" 
                className="w-full max-w-md mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating Stats Cards */}
              <TiltCard className="absolute -left-8 top-1/4" tiltAmount={15}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="glass-card"
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle size={18} className="text-success" />
                    </motion.div>
                    <div>
                      <p className="text-xl font-bold">10K+</p>
                      <p className="text-xs text-muted-foreground">Solved</p>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
              
              <TiltCard className="absolute -right-8 bottom-1/4" tiltAmount={15}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="glass-card"
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Star size={18} className="text-warning fill-warning" />
                    </motion.div>
                    <div>
                      <p className="text-xl font-bold">4.9</p>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-12 md:py-20 bg-card/50 border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <TiltCard key={stat.label} tiltAmount={8} glareEnabled={false}>
                  <motion.div
                    variants={itemVariants}
                    className="text-center p-4 md:p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-bg mx-auto mb-3 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={22} className="text-white" />
                    </motion.div>
                    <div className="text-2xl md:text-3xl font-black gradient-text">
                      {stat.prefix}
                      <AnimatedCounter value={stat.value} duration={2 + index * 0.3} />
                      {stat.suffix}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                </TiltCard>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon size={24} className="text-primary" />
                </motion.div>
                <h3 className="font-bold text-sm md:text-base">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 md:py-12 bg-background border-b border-border/50">
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
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-bg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <TrendingUp size={20} className="text-white" />
                </motion.div>
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
                  filteredTickets.map((ticket) => (
                    <motion.div
                      key={ticket.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
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
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-success/10 flex items-center justify-center border border-success/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Users size={20} className="text-success" />
                  </motion.div>
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
                  {trainers.slice(0, 3).map((trainer) => (
                    <motion.div
                      key={trainer.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <TrainerCard trainer={trainer} />
                    </motion.div>
                  ))}
                </motion.div>

                <Link to="/trainers" className="block mt-6">
                  <MagneticButton strength={0.15} className="w-full">
                    <Button variant="outline" className="w-full group h-12">
                      View All Trainers
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
        <GlowingOrb x="10%" y="50%" size={300} color="hsl(258, 90%, 60%)" delay={0} />
        <GlowingOrb x="90%" y="30%" size={250} color="hsl(310, 80%, 55%)" delay={2} />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              Simple Process
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Get your tech problems solved in three simple steps
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <TiltCard key={index} tiltAmount={10}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="ultra-card text-center h-full group">
                    {/* Step Number */}
                    <motion.div 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-md"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Feature Icon */}
                    <motion.div 
                      className="mt-6 mb-4 w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <feature.icon size={28} className="text-primary" />
                    </motion.div>

                    {/* Feature Image */}
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain"
                      />
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          {/* Connection Lines - Desktop only */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
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
              <TiltCard key={index} tiltAmount={8}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="ultra-card h-full"
                >
                  {/* Quote icon */}
                  <motion.div 
                    className="text-4xl text-primary/20 font-serif mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    "
                  </motion.div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        <Star size={14} className="text-warning fill-warning" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed mb-4">"{testimonial.content}"</p>

                  <div className="flex items-center gap-3">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-xl object-cover"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <FloatingElements />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 relative text-center"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Solve Your Problem?
            </motion.h2>
            <motion.p 
              className="mt-4 md:mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Join thousands of users who have already found solutions with our verified trainers.
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MagneticButton strength={0.2}>
                <Link to="/signup">
                  <Button variant="glass" size="lg" className="group">
                    Start Now — It's Free
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Index;
