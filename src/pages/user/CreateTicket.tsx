import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories, getRecommendedTrainers, Trainer } from "@/data/mockData";
import TrainerCard from "@/components/shared/TrainerCard";
import { toast } from "@/hooks/use-toast";
import { Upload, ArrowLeft, Send } from "lucide-react";

const CreateTicket = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "trainers" | "confirm">("form");
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [recommendedTrainers, setRecommendedTrainers] = useState<Trainer[]>([]);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    urgency: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.title || !formData.description) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    const trainers = getRecommendedTrainers(formData.category);
    setRecommendedTrainers(trainers);
    setStep("trainers");
  };

  const handleSelectTrainer = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setStep("confirm");
  };

  const handleSendRequest = () => {
    const ticketId = `TCK${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
    toast({
      title: "Request Sent!",
      description: `Your request has been sent to ${selectedTrainer?.name}. Ticket ID: #${ticketId}`,
    });
    navigate("/my-tickets");
  };

  return (
    <DashboardLayout userType="user">
      <div className="max-w-2xl mx-auto pb-20 md:pb-0">
        {step === "form" && (
          <>
            <h1 className="text-2xl font-bold mb-6">Create New Ticket</h1>

            <form onSubmit={handleFormSubmit} className="content-card space-y-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
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
                <Label htmlFor="title">Ticket Title *</Label>
                <Input
                  id="title"
                  placeholder="Brief title of your issue"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Problem Description *</Label>
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
                <Label>Attachment (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                  <p className="text-sm text-muted-foreground">Click to upload files</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Find Recommended Trainers
              </Button>
            </form>
          </>
        )}

        {step === "trainers" && (
          <>
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => setStep("form")}
            >
              <ArrowLeft size={18} />
              Back to Form
            </Button>

            <h1 className="text-2xl font-bold mb-2">Recommended Trainers</h1>
            <p className="text-muted-foreground mb-6">
              Based on your issue category: <span className="font-medium text-foreground">{formData.category}</span>
            </p>

            <div className="space-y-4">
              {recommendedTrainers.length > 0 ? (
                recommendedTrainers.map((trainer) => (
                  <TrainerCard
                    key={trainer.id}
                    trainer={trainer}
                    onSelect={handleSelectTrainer}
                    showSelectButton
                  />
                ))
              ) : (
                <div className="content-card text-center py-8">
                  <p className="text-muted-foreground">No trainers available for this category at the moment.</p>
                </div>
              )}
            </div>
          </>
        )}

        {step === "confirm" && selectedTrainer && (
          <>
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => setStep("trainers")}
            >
              <ArrowLeft size={18} />
              Back to Trainers
            </Button>

            <h1 className="text-2xl font-bold mb-6">Confirm Request</h1>

            <div className="content-card space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Your Ticket</h3>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="font-medium">{formData.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{formData.category}</p>
                  <p className="text-sm text-muted-foreground mt-2">{formData.description}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Selected Trainer</h3>
                <TrainerCard trainer={selectedTrainer} />
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm">
                  By sending this request, {selectedTrainer.name} will be notified about your ticket. 
                  Once they accept, you can start chatting to solve your issue.
                </p>
              </div>

              <Button size="lg" className="w-full" onClick={handleSendRequest}>
                <Send size={18} />
                Send Request to {selectedTrainer.name}
              </Button>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CreateTicket;
