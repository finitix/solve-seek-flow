import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, MessageCircle, Clock, CheckCircle, Send } from "lucide-react";

const MyTickets = () => {
  const tickets = [
    { 
      id: "TCK001", 
      title: "VPN connection dropping every 10 minutes", 
      category: "Network Issues", 
      status: "in-progress",
      trainer: "Alex Thompson",
      trainerId: "t1",
      canChat: true,
    },
    { 
      id: "TCK002", 
      title: "Need help with Python library installation", 
      category: "Software Installation", 
      status: "pending",
      trainer: "Mike Johnson",
      trainerId: "t3",
      canChat: false,
    },
    { 
      id: "TCK003", 
      title: "Email server setup for business", 
      category: "Email Configuration", 
      status: "solved",
      trainer: "Sarah Chen",
      trainerId: "t2",
      canChat: false,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="status-badge bg-warning/10 text-warning flex items-center gap-1">
            <Clock size={12} />
            Pending
          </span>
        );
      case "in-progress":
        return (
          <span className="status-badge bg-primary/10 text-primary flex items-center gap-1">
            <Send size={12} />
            In Progress
          </span>
        );
      case "solved":
        return (
          <span className="status-badge bg-success/10 text-success flex items-center gap-1">
            <CheckCircle size={12} />
            Solved
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout userType="user">
      <div className="max-w-4xl mx-auto pb-20 md:pb-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">My Tickets</h1>
          <Link to="/create-ticket">
            <Button>
              <Plus size={18} />
              New Ticket
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="content-card hover:border-primary/30 transition-colors animate-fade-in"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">#{ticket.id}</p>
                    {getStatusBadge(ticket.status)}
                  </div>
                  <h3 className="font-semibold mt-2">{ticket.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{ticket.category}</p>
                  
                  {ticket.trainer && (
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xs">
                          {ticket.trainer.charAt(0)}
                        </span>
                      </div>
                      <Link 
                        to={`/trainer/${ticket.trainerId}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {ticket.trainer}
                      </Link>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {ticket.canChat && (
                    <Link to={`/chat/${ticket.id}`}>
                      <Button>
                        <MessageCircle size={16} />
                        Chat
                      </Button>
                    </Link>
                  )}
                  {ticket.status === "pending" && (
                    <span className="text-sm text-muted-foreground">Waiting for trainer...</span>
                  )}
                  {ticket.status === "solved" && (
                    <Link to={`/ticket/${ticket.id}`}>
                      <Button variant="outline">View Solution</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyTickets;
