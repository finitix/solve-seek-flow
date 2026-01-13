import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TicketCard from "@/components/shared/TicketCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const MyTickets = () => {
  const tickets = [
    { id: "#TCK001", title: "Cannot install software on Windows 11", category: "Software Installation", status: "waiting" as const },
    { id: "#TCK002", title: "Network connectivity drops every hour", category: "Network Issues", status: "in-progress" as const },
    { id: "#TCK003", title: "Need help setting up Outlook email", category: "Email Configuration", status: "solved" as const },
    { id: "#TCK004", title: "Slow computer performance issue", category: "Hardware Problems", status: "waiting" as const },
    { id: "#TCK005", title: "VPN connection troubleshooting", category: "Network Issues", status: "solved" as const },
  ];

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

        <div className="space-y-3">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              category={ticket.category}
              status={ticket.status}
              linkTo={`/ticket/${ticket.id.replace("#", "")}`}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyTickets;
