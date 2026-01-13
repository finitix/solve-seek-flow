import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Send, CheckCircle, MessageSquare } from "lucide-react";

type TicketStatus = "in-progress" | "solved";

interface AcceptedTicket {
  id: string;
  title: string;
  category: string;
  status: TicketStatus;
  user: string;
}

const TrainerTickets = () => {
  const [tickets, setTickets] = useState<{
    available: { id: string; title: string; category: string; urgency: string }[];
    accepted: AcceptedTicket[];
  }>({
    available: [
      { id: "#TCK101", title: "VPN configuration help needed", category: "Network Issues", urgency: "High" },
      { id: "#TCK102", title: "Cannot install Python libraries", category: "Software Installation", urgency: "Normal" },
      { id: "#TCK103", title: "Email server setup for business", category: "Email Configuration", urgency: "High" },
    ],
    accepted: [
      { id: "#TCK050", title: "Database migration assistance", category: "Database Support", status: "in-progress", user: "John Doe" },
      { id: "#TCK048", title: "Cloud storage setup help", category: "Cloud Services", status: "in-progress", user: "Sarah Miller" },
      { id: "#TCK045", title: "Antivirus installation issue", category: "Security", status: "in-progress", user: "Mike Brown" },
    ],
  });

  const handleMarkSolved = (ticketId: string) => {
    setTickets((prev) => ({
      ...prev,
      accepted: prev.accepted.map((t) =>
        t.id === ticketId ? { ...t, status: "solved" as TicketStatus } : t
      ),
    }));
    toast({
      title: "Ticket Solved",
      description: `${ticketId} has been marked as solved. Great work!`,
    });
  };

  return (
    <DashboardLayout userType="trainer">
      <div className="max-w-5xl mx-auto pb-20 md:pb-0">
        <h1 className="text-2xl font-bold mb-6">Manage Tickets</h1>

        {/* Accepted Tickets - Primary Focus */}
        <div className="content-card mb-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-success" size={20} />
            <h2 className="text-lg font-semibold">My Accepted Tickets</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Tickets you're currently working on. Solve them to earn your payment.
          </p>

          {tickets.accepted.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No accepted tickets yet</p>
          ) : (
            <div className="space-y-4">
              {tickets.accepted.map((ticket) => (
                <div
                  key={ticket.id}
                  className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs text-muted-foreground">{ticket.id}</p>
                        <StatusBadge status={ticket.status} />
                      </div>
                      <h3 className="font-medium">{ticket.title}</h3>
                      <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span>{ticket.category}</span>
                        <span>•</span>
                        <span>User: {ticket.user}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare size={16} />
                        Chat
                      </Button>
                      {ticket.status !== "solved" && (
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => handleMarkSolved(ticket.id)}
                        >
                          <CheckCircle size={16} />
                          Mark Solved
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Available Tickets */}
        <div className="content-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Available Tickets</h2>
            <span className="text-sm text-muted-foreground">
              {tickets.available.length} tickets available
            </span>
          </div>

          <div className="space-y-4">
            {tickets.available.map((ticket) => (
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
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          ticket.urgency === "High"
                            ? "bg-warning/10 text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
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

export default TrainerTickets;
