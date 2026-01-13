import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const CreateTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    urgency: "",
    expectedOutcome: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `TCK${Math.floor(Math.random() * 1000)}`;
    toast({
      title: "Ticket Created Successfully",
      description: `Ticket ID: #${ticketId}`,
    });
    navigate("/my-tickets");
  };

  const categories = [
    "Software Installation",
    "Network Issues",
    "Hardware Problems",
    "Security Concerns",
    "Email Configuration",
    "Cloud Services",
    "Database Support",
    "Other",
  ];

  return (
    <DashboardLayout userType="user">
      <div className="max-w-2xl mx-auto pb-20 md:pb-0">
        <h1 className="text-2xl font-bold mb-6">Create New Ticket</h1>

        <form onSubmit={handleSubmit} className="content-card space-y-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-card">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Ticket Title</Label>
            <Input
              id="title"
              placeholder="Brief title of your issue"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Problem Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your issue in detail..."
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency Level</Label>
            <Select
              value={formData.urgency}
              onValueChange={(value) => setFormData({ ...formData, urgency: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent className="bg-card">
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expectedOutcome">Expected Outcome</Label>
            <Textarea
              id="expectedOutcome"
              placeholder="What result do you expect?"
              rows={3}
              value={formData.expectedOutcome}
              onChange={(e) => setFormData({ ...formData, expectedOutcome: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Attachment (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
              <p className="text-sm text-muted-foreground">Click to upload files</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF up to 10MB</p>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Submit Ticket
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateTicket;
