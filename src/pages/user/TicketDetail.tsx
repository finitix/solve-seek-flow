import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Star, Clock, DollarSign } from "lucide-react";

const TicketDetail = () => {
  const { id } = useParams();
  const [acceptedTrainer, setAcceptedTrainer] = useState<string | null>(null);

  const ticket = {
    id: `#${id}`,
    title: "Cannot install software on Windows 11",
    category: "Software Installation",
    status: "waiting" as const,
    description: "I'm trying to install Adobe Creative Suite on my Windows 11 laptop but getting an error message. The error says 'Installation failed: Error code 1603'. I've tried restarting my computer and running as administrator but it still doesn't work.",
    urgency: "High",
    createdAt: "January 10, 2024",
    timeline: [
      { date: "Jan 10, 2024", event: "Ticket Created" },
      { date: "Jan 10, 2024", event: "Waiting for Proposals" },
    ],
  };

  const proposals = [
    { id: 1, trainer: "Alex Thompson", rating: 4.9, reviews: 156, time: "2 hours", price: 45 },
    { id: 2, trainer: "Sarah Chen", rating: 4.8, reviews: 89, time: "3 hours", price: 35 },
    { id: 3, trainer: "Mike Johnson", rating: 4.7, reviews: 203, time: "1-2 hours", price: 55 },
  ];

  const handleAccept = (trainerId: number, trainerName: string) => {
    setAcceptedTrainer(trainerName);
    toast({
      title: "Ticket Locked",
      description: `Ticket locked to ${trainerName} successfully`,
    });
  };

  return (
    <DashboardLayout userType="user">
      <div className="max-w-4xl mx-auto pb-20 md:pb-0">
        <div className="content-card mb-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm text-muted-foreground">{ticket.id}</p>
              <h1 className="text-xl font-bold mt-1">{ticket.title}</h1>
              <p className="text-muted-foreground mt-1">{ticket.category}</p>
            </div>
            <StatusBadge status={ticket.status} />
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <h2 className="font-semibold mb-2">Problem Description</h2>
            <p className="text-muted-foreground">{ticket.description}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Urgency Level</p>
              <p className="font-medium text-warning">{ticket.urgency}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Created</p>
              <p className="font-medium">{ticket.createdAt}</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="content-card mb-6">
          <h2 className="font-semibold mb-4">Status Timeline</h2>
          <div className="space-y-3">
            {ticket.timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">{item.date}</p>
                <p className="text-sm font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proposals */}
        <div className="content-card">
          <h2 className="font-semibold mb-4">Trainer Proposals</h2>
          
          {acceptedTrainer ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-success" size={32} />
              </div>
              <h3 className="font-semibold text-lg">Proposal Accepted</h3>
              <p className="text-muted-foreground mt-1">
                You've locked this ticket to {acceptedTrainer}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-semibold">{proposal.trainer}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="text-warning fill-warning" size={14} />
                        <span className="text-sm">{proposal.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({proposal.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <Button onClick={() => handleAccept(proposal.id, proposal.trainer)}>
                      Accept
                    </Button>
                  </div>
                  <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{proposal.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} />
                      <span>${proposal.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketDetail;
