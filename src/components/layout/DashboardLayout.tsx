import { Link, useLocation } from "react-router-dom";
import { Bell, User, Home, FileText, Settings, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "user" | "trainer" | "admin";
  userName?: string;
}

const DashboardLayout = ({ children, userType, userName = "User" }: DashboardLayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userLinks = [
    { to: "/dashboard", icon: Home, label: "Home" },
    { to: "/my-tickets", icon: FileText, label: "My Tickets" },
    { to: "/notifications", icon: Bell, label: "Notifications" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  const trainerLinks = [
    { to: "/trainer/dashboard", icon: Home, label: "Home" },
    { to: "/trainer/tickets", icon: FileText, label: "Tickets" },
    { to: "/notifications", icon: Bell, label: "Notifications" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  const adminLinks = [
    { to: "/admin/dashboard", icon: Home, label: "Home" },
    { to: "/admin/verifications", icon: FileText, label: "Verifications" },
    { to: "/admin/tickets", icon: FileText, label: "Tickets" },
    { to: "/admin/messages", icon: Bell, label: "Messages" },
  ];

  const links = userType === "admin" ? adminLinks : userType === "trainer" ? trainerLinks : userLinks;

  return (
    <div className="min-h-screen bg-secondary">
      {/* Top Bar */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">T</span>
                </div>
                <span className="font-semibold text-lg text-foreground hidden sm:block">TechSolve</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/notifications">
                <Button variant="ghost" size="icon">
                  <Bell size={20} />
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User size={20} />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <LogOut size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-64 bg-card border-r border-border min-h-[calc(100vh-64px)] p-4 flex-col gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
          
          <div className="mt-auto">
            <Link
              to="/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Settings size={20} />
              <span className="font-medium">Settings</span>
            </Link>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-foreground/20" onClick={() => setIsMobileMenuOpen(false)} />
            <aside className="fixed left-0 top-16 bottom-0 w-64 bg-card border-r border-border p-4 flex flex-col gap-2 animate-slide-in">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
        <div className="flex items-center justify-around py-2">
          {links.slice(0, 4).map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center gap-1 p-2 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default DashboardLayout;
