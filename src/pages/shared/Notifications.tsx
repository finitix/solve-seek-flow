import DashboardLayout from "@/components/layout/DashboardLayout";
import { Bell, FileText, UserCheck, CheckCircle } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "proposal",
      icon: FileText,
      title: "New Proposal Received",
      description: "Alex Thompson sent a proposal for ticket #TCK001",
      time: "5 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "trainer",
      icon: UserCheck,
      title: "Trainer Approved",
      description: "Your trainer application has been approved!",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "solved",
      icon: CheckCircle,
      title: "Ticket Solved",
      description: "Ticket #TCK002 has been marked as solved",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 4,
      type: "proposal",
      icon: FileText,
      title: "New Proposal Received",
      description: "Sarah Chen sent a proposal for ticket #TCK003",
      time: "2 days ago",
      unread: false,
    },
  ];

  return (
    <DashboardLayout userType="user">
      <div className="max-w-2xl mx-auto pb-20 md:pb-0">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-primary" size={24} />
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`content-card ${notification.unread ? "border-primary/30" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${notification.unread ? "bg-primary/10" : "bg-muted"}`}>
                    <Icon className={notification.unread ? "text-primary" : "text-muted-foreground"} size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-medium ${notification.unread ? "" : "text-muted-foreground"}`}>
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
