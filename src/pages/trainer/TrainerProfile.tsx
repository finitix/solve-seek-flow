import { useParams, Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { getTrainerById, solvedTickets } from "@/data/mockData";
import { Star, CheckCircle, Clock, DollarSign, MapPin, Mail, ArrowLeft } from "lucide-react";
import TicketPost from "@/components/shared/TicketPost";

const TrainerProfile = () => {
  const { id } = useParams();
  const trainer = getTrainerById(id || "");

  if (!trainer) {
    return (
      <DashboardLayout userType="user">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Trainer not found</p>
          <Link to="/trainers">
            <Button className="mt-4">Browse Trainers</Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const trainerSolvedTickets = solvedTickets.filter((t) => t.trainerId === id);

  return (
    <DashboardLayout userType="user">
      <div className="max-w-4xl mx-auto pb-20 md:pb-0">
        <Link to="/trainers">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft size={18} />
            Back to Trainers
          </Button>
        </Link>

        {/* Profile Header */}
        <div className="content-card mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground text-3xl font-bold">
                {trainer.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold">{trainer.name}</h1>
                {trainer.verified && (
                  <span className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle size={12} />
                    Verified
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <Star className="text-warning fill-warning" size={16} />
                <span className="font-medium">{trainer.rating}</span>
                <span className="text-muted-foreground">({trainer.reviews} reviews)</span>
              </div>

              <p className="text-muted-foreground mt-3">{trainer.bio}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {trainer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="content-card text-center">
            <CheckCircle className="text-success mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold">{trainer.solvedTickets}</p>
            <p className="text-sm text-muted-foreground">Tickets Solved</p>
          </div>
          <div className="content-card text-center">
            <Star className="text-warning mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold">{trainer.rating}</p>
            <p className="text-sm text-muted-foreground">Rating</p>
          </div>
          <div className="content-card text-center">
            <Clock className="text-primary mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold">{trainer.experience}</p>
            <p className="text-sm text-muted-foreground">Experience</p>
          </div>
          <div className="content-card text-center">
            <DollarSign className="text-success mx-auto mb-2" size={24} />
            <p className="text-2xl font-bold">${trainer.hourlyRate}</p>
            <p className="text-sm text-muted-foreground">Per Hour</p>
          </div>
        </div>

        {/* Recent Solutions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Solutions</h2>
          {trainerSolvedTickets.length > 0 ? (
            <div className="space-y-4">
              {trainerSolvedTickets.map((ticket) => (
                <TicketPost key={ticket.id} ticket={ticket} />
              ))}
            </div>
          ) : (
            <div className="content-card text-center py-8 text-muted-foreground">
              No solutions posted yet.
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerProfile;
