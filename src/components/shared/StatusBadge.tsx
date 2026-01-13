interface StatusBadgeProps {
  status: "waiting" | "in-progress" | "solved" | "pending" | "approved" | "rejected";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusConfig = {
    waiting: { label: "Waiting", className: "status-badge status-waiting" },
    "in-progress": { label: "In Progress", className: "status-badge status-progress" },
    solved: { label: "Solved", className: "status-badge status-solved" },
    pending: { label: "Pending", className: "status-badge status-waiting" },
    approved: { label: "Approved", className: "status-badge status-solved" },
    rejected: { label: "Rejected", className: "status-badge bg-destructive/10 text-destructive" },
  };

  const config = statusConfig[status];

  return <span className={config.className}>{config.label}</span>;
};

export default StatusBadge;
