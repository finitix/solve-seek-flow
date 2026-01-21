import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Phone, Video, MoreVertical, CheckCircle } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isTrainer: boolean;
  timestamp: string;
}

const TrainerChat = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [solution, setSolution] = useState("");
  const [showSolutionForm, setShowSolutionForm] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm having trouble with my database connection timing out.",
      isTrainer: false,
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      content: "Hello Lisa! I'd be happy to help. Can you tell me what database you're using and what error message you're seeing?",
      isTrainer: true,
      timestamp: "10:32 AM",
    },
    {
      id: "3",
      content: "I'm using PostgreSQL. The error says 'connection timed out after 30000ms'",
      isTrainer: false,
      timestamp: "10:33 AM",
    },
    {
      id: "4",
      content: "That sounds like a connection pool issue. Let's check your database configuration. What's your current pool size setting?",
      isTrainer: true,
      timestamp: "10:35 AM",
    },
  ]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      isTrainer: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Simulate user response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: "Let me check that and get back to you.",
        isTrainer: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, response]);
    }, 2000);
  };

  const handleMarkSolved = () => {
    if (!solution.trim()) {
      toast({
        title: "Solution Required",
        description: "Please describe the solution before marking as solved.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Ticket Solved! 🎉",
      description: "Great work! Your solution has been posted to the community.",
    });
    navigate("/trainer/dashboard");
  };

  return (
    <DashboardLayout userType="trainer">
      <div className="max-w-3xl mx-auto pb-20 md:pb-0 h-[calc(100vh-200px)] flex flex-col">
        {/* Chat Header */}
        <div className="content-card mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-foreground font-semibold">L</span>
              </div>
              <div>
                <p className="font-semibold">Lisa Park</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <span className="w-2 h-2 bg-success rounded-full"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Video size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical size={18} />
              </Button>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">Ticket #{ticketId}</p>
            <p className="text-sm font-medium">Database connection timeout</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 content-card overflow-y-auto mb-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isTrainer ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2 ${
                    message.isTrainer
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.isTrainer ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Form */}
        {showSolutionForm && (
          <div className="content-card mb-4 animate-fade-in">
            <h3 className="font-semibold mb-2">Describe your solution</h3>
            <Textarea
              placeholder="Explain how you solved this issue so others can learn from it..."
              rows={3}
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            />
            <div className="flex gap-2 mt-3">
              <Button variant="outline" onClick={() => setShowSolutionForm(false)} className="flex-1">
                Cancel
              </Button>
              <Button variant="success" onClick={handleMarkSolved} className="flex-1">
                <CheckCircle size={16} />
                Post Solution
              </Button>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="content-card">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend}>
              <Send size={18} />
            </Button>
          </div>
          {!showSolutionForm && (
            <div className="mt-3 pt-3 border-t border-border">
              <Button variant="success" className="w-full" onClick={() => setShowSolutionForm(true)}>
                <CheckCircle size={18} />
                Mark as Solved
              </Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerChat;
