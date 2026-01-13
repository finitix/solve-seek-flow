import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/shared/StatCard";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, Clock, FileText, Check, X, Eye } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", value: 1250, icon: Users, variant: "default" as const },
    { title: "Total Trainers", value: 89, icon: UserCheck, variant: "primary" as const },
    { title: "Pending Verifications", value: 12, icon: Clock, variant: "warning" as const },
    { title: "Active Tickets", value: 45, icon: FileText, variant: "success" as const },
  ];

  const pendingVerifications = [
    { id: 1, name: "John Smith", email: "john@example.com", date: "Jan 12, 2024" },
    { id: 2, name: "Sarah Connor", email: "sarah@example.com", date: "Jan 11, 2024" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", date: "Jan 10, 2024" },
  ];

  const handleApprove = (name: string) => {
    toast({
      title: "Trainer Approved",
      description: `${name} has been approved as a trainer.`,
    });
  };

  const handleReject = (name: string) => {
    toast({
      title: "Trainer Rejected",
      description: `${name}'s application has been rejected.`,
      variant: "destructive",
    });
  };

  return (
    <DashboardLayout userType="admin" userName="Admin">
      <div className="max-w-6xl mx-auto pb-20 md:pb-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Link to="/">
            <Button variant="outline">Logout</Button>
          </Link>
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
            <h2 className="text-lg font-semibold">Pending Trainer Verifications</h2>
            <Link to="/admin/verifications" className="text-primary text-sm font-medium hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {pendingVerifications.map((trainer) => (
              <div
                key={trainer.id}
                className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-medium">{trainer.name}</h3>
                    <p className="text-sm text-muted-foreground">{trainer.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">Applied: {trainer.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye size={16} />
                      View
                    </Button>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleApprove(trainer.name)}
                    >
                      <Check size={16} />
                      Approve
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleReject(trainer.name)}
                    >
                      <X size={16} />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
