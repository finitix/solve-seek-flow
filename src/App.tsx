import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth Pages
import UserSignup from "./pages/auth/UserSignup";
import UserLogin from "./pages/auth/UserLogin";
import TrainerLogin from "./pages/auth/TrainerLogin";
import AdminLogin from "./pages/auth/AdminLogin";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import CreateTicket from "./pages/user/CreateTicket";
import MyTickets from "./pages/user/MyTickets";
import TicketDetail from "./pages/user/TicketDetail";
import Chat from "./pages/user/Chat";

// Trainer Pages
import TrainerVerification from "./pages/trainer/TrainerVerification";
import TrainerDashboard from "./pages/trainer/TrainerDashboard";
import TrainerTickets from "./pages/trainer/TrainerTickets";
import TrainerProfile from "./pages/trainer/TrainerProfile";
import TrainersList from "./pages/trainer/TrainersList";
import TrainerChat from "./pages/trainer/TrainerChat";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminMessages from "./pages/admin/AdminMessages";

// Shared Pages
import Profile from "./pages/shared/Profile";
import Settings from "./pages/shared/Settings";
import Notifications from "./pages/shared/Notifications";
import Payment from "./pages/shared/Payment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Index />} />

          {/* Auth Routes */}
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/trainer/login" element={<TrainerLogin />} />
          <Route path="/trainer/verify" element={<TrainerVerification />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* User Routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/ticket/:id" element={<TicketDetail />} />
          <Route path="/chat/:ticketId" element={<Chat />} />

          {/* Trainer Routes */}
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainer/:id" element={<TrainerProfile />} />
          <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
          <Route path="/trainer/tickets" element={<TrainerTickets />} />
          <Route path="/trainer/chat/:ticketId" element={<TrainerChat />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/verifications" element={<AdminDashboard />} />
          <Route path="/admin/tickets" element={<AdminDashboard />} />
          <Route path="/admin/messages" element={<AdminMessages />} />

          {/* Shared Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payment" element={<Payment />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
