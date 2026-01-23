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
import { FileText, UserCheck, Shield, TrendingUp, Sparkles, Zap, ArrowRight, Star, Users, Award, Clock } from "lucide-react";

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
      icon: FileText,
      title: "Create Ticket",
      description: "Describe your tech problem and submit a ticket in seconds.",
      gradient: "from-primary via-accent to-primary",
    },
    {
      icon: UserCheck,
      title: "Choose Your Trainer",
      description: "Select from recommended verified trainers for your issue.",
      gradient: "from-accent via-primary to-accent",
    },
    {
      icon: Shield,
      title: "Chat & Solve",
      description: "Work directly with your trainer through secure chat.",
      gradient: "from-success via-primary to-success",
    },
  ];

  const stats = [
    { value: "10K+", label: "Problems Solved", icon: Award },
    { value: "500+", label: "Expert Trainers", icon: Users },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
    { value: "24/7", label: "Support Available", icon: Clock },
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
      <section className="relative min-h-[90vh] flex items-center justify-center py-24 md:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 mesh-gradient opacity-40" />
          
          {/* Floating Orbs */}
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-accent/25 to-success/25 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [0, -40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full"
          />

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/50 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-accent/50 rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [-15, 25, -15], x: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute top-1/3 left-1/3 w-3 h-3 bg-success/50 rounded-full blur-sm"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-xl mb-10"
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
              className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] tracking-tight text-balance"
            >
              Solve Your Tech{" "}
              <br className="hidden md:block" />
              Problems{" "}
              <span className="gradient-text-animated">Instantly</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Connect with verified experts, get personalized solutions, and share knowledge with the community.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <Link to="/signup">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" className="group shadow-2xl shadow-primary/30">
                    <Zap size={22} className="group-hover:rotate-12 transition-transform" />
                    Get Started Free
                    <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/trainers">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" size="xl" className="backdrop-blur-sm">
                    Browse Trainers
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={containerVariants}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="ultra-card text-center py-6">
                      <div className="w-12 h-12 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-white" />
                      </div>
                      <p className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
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

      {/* Search Section */}
      <section className="py-12 bg-muted/30 border-y border-border/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>
        </div>
      </section>

      {/* Feed Section */}
      <section className="py-20 md:py-28 flex-1 spotlight">
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
                    <UserCheck size={26} className="text-success" />
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
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

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
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
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
                    <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
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

                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mt-6 shadow-2xl group-hover:shadow-primary/40 transition-shadow duration-500`}
                    >
                      <Icon className="text-white" size={36} />
                    </motion.div>
                    <h3 className="mt-8 text-2xl font-bold">{feature.title}</h3>
                    <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
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
