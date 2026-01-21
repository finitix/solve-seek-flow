import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Send, Phone, Video, MoreVertical, CheckCircle } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const Chat = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I've reviewed your ticket. Let me help you with your VPN connection issue.",
      isUser: false,
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      content: "Thank you! The VPN keeps disconnecting every 10 minutes.",
      isUser: true,
      timestamp: "10:32 AM",
    },
    {
      id: "3",
      content: "That's a common issue. Can you tell me which VPN client you're using and your Windows version?",
      isUser: false,
      timestamp: "10:33 AM",
    },
    {
      id: "4",
      content: "I'm using OpenVPN on Windows 11.",
      isUser: true,
      timestamp: "10:35 AM",
    },
    {
      id: "5",
      content: "Perfect. Let's try updating your network adapter drivers first. Go to Device Manager > Network adapters > Right-click on your adapter > Update driver.",
      isUser: false,
      timestamp: "10:36 AM",
    },
  ]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Simulate trainer response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: "Got it! Let me know how it goes after updating the drivers.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, response]);
    }, 2000);
  };

  const handleMarkSolved = () => {
    toast({
      title: "Ticket Marked as Solved! 🎉",
      description: "Your solution has been posted to the community feed.",
    });
    navigate("/my-tickets");
  };

  return (
    <DashboardLayout userType="user">
      <div className="max-w-3xl mx-auto pb-20 md:pb-0 h-[calc(100vh-200px)] flex flex-col">
        {/* Chat Header */}
        <div className="content-card mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">A</span>
              </div>
              <div>
                <p className="font-semibold">Alex Thompson</p>
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
            <p className="text-sm font-medium">VPN connection dropping every 10 minutes</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 content-card overflow-y-auto mb-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
          <div className="mt-3 pt-3 border-t border-border">
            <Button variant="success" className="w-full" onClick={handleMarkSolved}>
              <CheckCircle size={18} />
              Mark as Solved & Post to Feed
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
