import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Edit, Trash2 } from "lucide-react";

const AdminMessages = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Platform maintenance scheduled for this weekend.", date: "Jan 12, 2024" },
    { id: 2, text: "New feature: Video consultations now available!", date: "Jan 10, 2024" },
    { id: 3, text: "Welcome all new trainers! Complete your verification to get started.", date: "Jan 5, 2024" },
  ]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: messages.length + 1,
      text: newMessage,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    
    setMessages([message, ...messages]);
    setNewMessage("");
    toast({
      title: "Message Sent",
      description: "Platform message has been sent to all users.",
    });
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id));
    toast({
      title: "Message Deleted",
      description: "The message has been removed.",
    });
  };

  return (
    <DashboardLayout userType="admin">
      <div className="max-w-3xl mx-auto pb-20 md:pb-0">
        <h1 className="text-2xl font-bold mb-6">Platform Messages</h1>

        <div className="content-card mb-6">
          <h2 className="font-semibold mb-4">Send New Message</h2>
          <Textarea
            placeholder="Type your message to all users..."
            rows={4}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button className="mt-4" onClick={handleSend}>
            <Send size={16} />
            Send Message
          </Button>
        </div>

        <div className="content-card">
          <h2 className="font-semibold mb-4">Message History</h2>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="border border-border rounded-lg p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-foreground">{message.text}</p>
                    <p className="text-xs text-muted-foreground mt-2">{message.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(message.id)}
                    >
                      <Trash2 size={16} />
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

export default AdminMessages;
