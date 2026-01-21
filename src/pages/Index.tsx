import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TicketPost from "@/components/shared/TicketPost";
import TrainerCard from "@/components/shared/TrainerCard";
import SearchBar from "@/components/shared/SearchBar";
import { solvedTickets, trainers } from "@/data/mockData";
import { FileText, UserCheck, Shield, TrendingUp } from "lucide-react";

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
    },
    {
      icon: UserCheck,
      title: "Choose Your Trainer",
      description: "Select from recommended verified trainers for your issue.",
    },
    {
      icon: Shield,
      title: "Chat & Solve",
      description: "Work directly with your trainer through secure chat.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-card py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Solve Your Tech Problems with{" "}
              <span className="text-primary">Verified Trainers</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Post your issue. Get matched. See solutions from the community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="hero">Get Started Free</Button>
              </Link>
              <Link to="/trainers">
                <Button variant="heroOutline">Browse Trainers</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Feed Section */}
      <section className="py-8 md:py-12 bg-secondary flex-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp size={20} className="text-primary" />
                  {searchPerformed ? "Search Results" : "Recently Solved"}
                </h2>
              </div>

              <div className="space-y-6">
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket) => (
                    <TicketPost key={ticket.id} ticket={ticket} />
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    No results found. Try a different search term.
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <h3 className="text-lg font-semibold mb-4">Top Trainers</h3>
                <div className="space-y-4">
                  {trainers.slice(0, 3).map((trainer) => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                  ))}
                </div>

                <Link to="/trainers" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    View All Trainers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-border hover:border-primary/30 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
