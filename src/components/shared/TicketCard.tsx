import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

interface TicketCardProps {
  id: string;
  title: string;
  category: string;
  status: "waiting" | "in-progress" | "solved";
  linkTo?: string;
}

const TicketCard = ({ id, title, category, status, linkTo }: TicketCardProps) => {
  const content = (
    <div className="content-card hover:border-primary/30 transition-colors cursor-pointer animate-fade-in">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground font-medium">{id}</p>
          <h3 className="font-semibold mt-1 truncate">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{category}</p>
        </div>
        <StatusBadge status={status} />
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }

  return content;
};

export default TicketCard;
