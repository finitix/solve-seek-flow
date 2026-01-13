import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Lock, Bell, LogOut } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    });
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
    navigate("/");
  };

  return (
    <DashboardLayout userType="user">
      <div className="max-w-xl mx-auto pb-20 md:pb-0">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        {/* Change Password */}
        <div className="content-card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-primary" size={20} />
            <h2 className="font-semibold">Change Password</h2>
          </div>

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <Input
                id="current"
                type="password"
                value={passwords.current}
                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <Input
                id="new"
                type="password"
                value={passwords.new}
                onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm New Password</Label>
              <Input
                id="confirm"
                type="password"
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              />
            </div>

            <Button type="submit">Update Password</Button>
          </form>
        </div>

        {/* Notifications */}
        <div className="content-card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-primary" size={20} />
            <h2 className="font-semibold">Notifications</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-muted-foreground">Receive notifications about your tickets</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </div>

        {/* Logout */}
        <div className="content-card">
          <div className="flex items-center gap-3 mb-4">
            <LogOut className="text-destructive" size={20} />
            <h2 className="font-semibold">Session</h2>
          </div>

          <Button variant="destructive" onClick={handleLogout} className="w-full">
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
