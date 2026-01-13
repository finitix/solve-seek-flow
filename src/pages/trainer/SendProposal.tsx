import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const SendProposal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    approach: "",
    estimatedTime: "",
    price: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposal Sent",
      description: "Your proposal has been sent successfully!",
    });
    navigate("/trainer/dashboard");
  };

  return (
    <DashboardLayout userType="trainer">
      <div className="max-w-2xl mx-auto pb-20 md:pb-0">
        <h1 className="text-2xl font-bold mb-2">Send Proposal</h1>
        <p className="text-muted-foreground mb-6">Ticket ID: #{id}</p>

        <form onSubmit={handleSubmit} className="content-card space-y-6">
          <div className="space-y-2">
            <Label htmlFor="approach">Your Approach / Solution Idea</Label>
            <Textarea
              id="approach"
              placeholder="Describe how you plan to solve this issue..."
              rows={5}
              value={formData.approach}
              onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Estimated Time</Label>
            <Input
              id="time"
              placeholder="e.g., 2-3 hours"
              value={formData.estimatedTime}
              onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Your Price ($)</Label>
            <Input
              id="price"
              type="number"
              placeholder="45"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={() => navigate(-1)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Send Proposal
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default SendProposal;
