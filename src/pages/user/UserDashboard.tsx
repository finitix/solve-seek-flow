import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { Plus, Clock, Loader2, CheckCircle } from "lucide-react";

const UserDashboard = () => {
  const stats = [
    { title: "Open Tickets", value: 3, icon: Clock, variant: "warning" as const },
    { title: "In Progress", value: 2, icon: Loader2, variant: "primary" as const },
    { title: "Solved", value: 12, icon: CheckCircle, variant: "success" as const },
  ];

  return (
    <DashboardLayout userType="user" userName="John">
      <div className="max-w-4xl mx-auto pb-20 md:pb-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Welcome, John 👋</h1>
          <p className="text-muted-foreground mt-1">Manage your tech support tickets</p>
        </div>

        <Link to="/create-ticket" className="block mb-8">
          <Button size="lg" className="w-full sm:w-auto">
            <Plus size={20} />
            Create New Ticket
          </Button>
        </Link>

        <div className="grid sm:grid-cols-3 gap-4">
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

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Tickets</h2>
            <Link to="/my-tickets" className="text-primary text-sm font-medium hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { id: "#TCK001", title: "Cannot install software", status: "waiting" },
              { id: "#TCK002", title: "Network connectivity issue", status: "in-progress" },
              { id: "#TCK003", title: "Email configuration help", status: "solved" },
            ].map((ticket) => (
              <Link
                key={ticket.id}
                to={`/ticket/${ticket.id.replace("#", "")}`}
                className="block content-card hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{ticket.id}</p>
                    <p className="font-medium mt-1">{ticket.title}</p>
                  </div>
                  <span className={`status-badge ${
                    ticket.status === "waiting" ? "status-waiting" :
                    ticket.status === "in-progress" ? "status-progress" : "status-solved"
                  }`}>
                    {ticket.status === "waiting" ? "Waiting" :
                     ticket.status === "in-progress" ? "In Progress" : "Solved"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
