import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, UserCheck, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: "Create Ticket",
      description: "Describe your tech problem and submit a ticket in seconds.",
    },
    {
      icon: UserCheck,
      title: "Get Verified Trainers",
      description: "Receive proposals from verified experts ready to help.",
    },
    {
      icon: Shield,
      title: "Secure Solution Delivery",
      description: "Work securely with escrow-protected payments.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Solve Your Tech Problems with{" "}
              <span className="text-primary">Verified Trainers</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Post your issue. Get proposals. Work securely.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="hero">I'm a User</Button>
              </Link>
              <Link to="/trainer/login">
                <Button variant="heroOutline">I'm a Trainer</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="content-card text-center hover:border-primary/30 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of users who have solved their tech problems with our platform.
          </p>
          <Link to="/signup">
            <Button size="xl">Create Free Account</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
