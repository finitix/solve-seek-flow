import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, DollarSign, Star, Check, X, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TrainerDashboard = () => {
  const stats = [
    { title: "Pending Requests", value: 3, icon: FileText, variant: "warning" as const },
    { title: "Active Chats", value: 2, icon: MessageCircle, variant: "primary" as const },
    { title: "Solved Tickets", value: 45, icon: CheckCircle, variant: "success" as const },
    { title: "Earnings", value: "$2,340", icon: DollarSign, variant: "default" as const },
  ];

  const [pendingRequests, setPendingRequests] = useState([
    { id: "TCK101", title: "VPN configuration help needed", user: "John Doe", category: "Network Issues", urgency: "High" },
    { id: "TCK102", title: "Cannot install Python libraries", user: "Jane Smith", category: "Software Installation", urgency: "Normal" },
    { id: "TCK103", title: "Email server setup for business", user: "Robert Chen", category: "Email Configuration", urgency: "High" },
  ]);

  const [activeChats, setActiveChats] = useState([
    { id: "TCK098", title: "Database connection timeout", user: "Lisa Park", category: "Database Support" },
    { id: "TCK099", title: "Cloud deployment failing", user: "Mark Williams", category: "Cloud Services" },
  ]);

  const handleAccept = (id: string, user: string) => {
    setPendingRequests(pendingRequests.filter((r) => r.id !== id));
    toast({
      title: "Request Accepted!",
      description: `You can now chat with ${user} to solve their issue.`,
    });
  };

  const handleReject = (id: string) => {
    setPendingRequests(pendingRequests.filter((r) => r.id !== id));
    toast({
      title: "Request Declined",
      description: "The user will be notified to select another trainer.",
    });
  };

  return (
    <DashboardLayout userType="trainer" userName="Alex">
      <div className="max-w-5xl mx-auto pb-20 md:pb-0">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-2xl font-bold">Welcome, Alex</h1>
          <span className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
            <Star size={12} className="fill-current" />
            4.9 Rating
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

        {/* Pending Requests */}
        <div className="content-card mb-6">
          <h2 className="text-lg font-semibold mb-4">Pending Requests</h2>
          
          {pendingRequests.length > 0 ? (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-muted-foreground">#{request.id}</p>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          request.urgency === "High" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"
                        }`}>
                          {request.urgency}
                        </span>
                      </div>
                      <h3 className="font-medium mt-1">{request.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        From: {request.user} • {request.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleAccept(request.id, request.user)}
                      >
                        <Check size={16} />
                        Accept
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReject(request.id)}
                      >
                        <X size={16} />
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No pending requests</p>
          )}
        </div>

        {/* Active Chats */}
        <div className="content-card">
          <h2 className="text-lg font-semibold mb-4">Active Chats</h2>
          
          {activeChats.length > 0 ? (
            <div className="space-y-4">
              {activeChats.map((chat) => (
                <div
                  key={chat.id}
                  className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-xs text-muted-foreground">#{chat.id}</p>
                      <h3 className="font-medium mt-1">{chat.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {chat.user} • {chat.category}
                      </p>
                    </div>
                    <Link to={`/trainer/chat/${chat.id}`}>
                      <Button>
                        <MessageCircle size={16} />
                        Open Chat
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No active chats</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerDashboard;
