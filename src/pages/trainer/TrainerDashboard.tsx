import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, DollarSign, Star, Send } from "lucide-react";

const TrainerDashboard = () => {
  const stats = [
    { title: "Available Tickets", value: 8, icon: FileText, variant: "primary" as const },
    { title: "Accepted Tickets", value: 3, icon: CheckCircle, variant: "success" as const },
    { title: "Earnings", value: "$1,240", icon: DollarSign, variant: "warning" as const },
    { title: "Trust Score", value: "4.9", icon: Star, variant: "default" as const },
  ];

  const availableTickets = [
    { id: "#TCK101", title: "VPN configuration help needed", category: "Network Issues", urgency: "High" },
    { id: "#TCK102", title: "Cannot install Python libraries", category: "Software Installation", urgency: "Normal" },
    { id: "#TCK103", title: "Email server setup for business", category: "Email Configuration", urgency: "High" },
  ];

  return (
    <DashboardLayout userType="trainer" userName="Alex">
      <div className="max-w-5xl mx-auto pb-20 md:pb-0">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl font-bold">Welcome, Alex</h1>
          <span className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded-full">
            ✓ Verified
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              variant={stat.variant}
            />
          ))}
        </div>

        <div className="content-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Available Tickets</h2>
            <Link to="/trainer/tickets" className="text-primary text-sm font-medium hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {availableTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{ticket.id}</p>
                    <h3 className="font-medium mt-1">{ticket.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm">
                      <span className="text-muted-foreground">{ticket.category}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        ticket.urgency === "High" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"
                      }`}>
                        {ticket.urgency}
                      </span>
                    </div>
                  </div>
                  <Link to={`/trainer/send-proposal/${ticket.id.replace("#", "")}`}>
                    <Button>
                      <Send size={16} />
                      Send Proposal
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerDashboard;
