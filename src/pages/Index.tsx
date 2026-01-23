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
      description: "Describe your tech problem and submit a ticket in seconds. Our AI helps categorize your issue.",
    },
    {
      image: featureTrainer,
      title: "Choose Your Trainer",
      description: "Get matched with verified experts. Browse profiles, ratings, and specializations.",
    },
    {
      image: featureChat,
      title: "Chat & Solve",
      description: "Work directly with your trainer through our secure, real-time chat platform.",
    },
  ];

  const stats = [
    { value: "10K+", label: "Problems Solved", icon: Award },
    { value: "500+", label: "Expert Trainers", icon: Users },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
    { value: "< 5min", label: "Avg Response", icon: Clock },
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-background overflow-hidden"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-20 h-20 bg-primary/20 rounded-3xl blur-sm hidden lg:block"
        />
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[10%] w-32 h-32 bg-accent/20 rounded-full blur-sm hidden lg:block"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-xl mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={18} className="text-primary" />
                </motion.div>
                <span className="text-sm font-semibold gradient-text">Trusted by 10,000+ users worldwide</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight"
              >
                Tech Problems?{" "}
                <br />
                <span className="gradient-text-animated">Solved Instantly.</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Connect with verified tech experts, get personalized solutions, and join a community of problem solvers.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link to="/signup">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" size="xl" className="group shadow-2xl shadow-primary/30 min-w-[200px]">
                      <Zap size={22} className="group-hover:rotate-12 transition-transform" />
                      Get Started Free
                    </Button>
                  </motion.div>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 backdrop-blur-xl border border-border hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Watch</p>
                    <p className="font-semibold">How It Works</p>
                  </div>
                </motion.button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-success" />
                  <span className="text-sm text-muted-foreground">Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-success" />
                  <span className="text-sm text-muted-foreground">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-success" />
                  <span className="text-sm text-muted-foreground">Verified Experts</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img 
                  src={communityIllustration} 
                  alt="Tech community collaboration" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 top-1/4 glass-card p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                      <CheckCircle size={20} className="text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">10K+</p>
                      <p className="text-xs text-muted-foreground">Solved</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 bottom-1/4 glass-card p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center">
                      <Star size={20} className="text-warning fill-warning" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">4.9</p>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center shadow-xl shadow-primary/30"
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>
                  <p className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Search Our <span className="gradient-text">Solution Library</span></h2>
            <p className="text-muted-foreground mt-2">Find answers from thousands of solved tech problems</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>
        </div>
      </section>

      {/* Feed Section */}
      <section className="py-20 md:py-28 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Feed */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-xl shadow-primary/30"
                >
                  <TrendingUp size={26} className="text-white" />
                </motion.div>
                <div>
                  <h2 className="text-3xl font-black">
                    {searchPerformed ? "Search Results" : "Recently Solved"}
                  </h2>
                  <p className="text-muted-foreground mt-1">Explore solutions from our community</p>
                </div>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket, index) => (
                    <motion.div
                      key={ticket.id}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TicketPost ticket={ticket} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    variants={itemVariants}
                    className="text-center py-20 ultra-card"
                  >
                    <p className="text-muted-foreground text-xl">No results found. Try a different search term.</p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-28"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center border border-success/20">
                    <Users size={26} className="text-success" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">Top Trainers</h3>
                    <p className="text-muted-foreground text-sm">Verified experts</p>
                  </div>
                </div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5"
                >
                  {trainers.slice(0, 3).map((trainer, index) => (
                    <motion.div
                      key={trainer.id}
                      variants={itemVariants}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <TrainerCard trainer={trainer} />
                    </motion.div>
                  ))}
                </motion.div>

                <Link to="/trainers" className="block mt-8">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full group h-14 text-base">
                      View All Trainers
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20"
            >
              Simple Process
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-xl max-w-2xl mx-auto">
              Get your tech problems solved in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                )}

                <motion.div 
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="ultra-card text-center h-full"
                >
                  {/* Step Number */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl gradient-bg flex items-center justify-center text-white font-black text-lg shadow-xl shadow-primary/40"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Feature Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="mt-4 mb-6"
                  >
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-40 h-40 mx-auto object-contain drop-shadow-xl"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black">
              What Our <span className="gradient-text">Users Say</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">Join thousands of satisfied users</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="ultra-card"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-warning fill-warning" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed mb-6">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-aurora-bg opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Ready to Solve
              <br />
              Your Problem?
            </h2>
            <p className="mt-8 text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who have already found solutions with our verified trainers.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-12"
            >
              <Link to="/signup">
                <Button variant="glass" size="xl" className="group shadow-2xl text-lg h-16 px-12">
                  Start Now — It's Free
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Index;
