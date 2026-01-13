import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Shield, Lock } from "lucide-react";

const Payment = () => {
  const [isPaid, setIsPaid] = useState(false);

  const paymentDetails = {
    ticketId: "#TCK001",
    trainer: "Alex Thompson",
    amount: 45,
    serviceFee: 4.5,
    total: 49.5,
  };

  const handlePay = () => {
    setIsPaid(true);
    toast({
      title: "Payment Successful",
      description: "Payment held by platform (Demo Mode)",
    });
  };

  return (
    <DashboardLayout userType="user">
      <div className="max-w-md mx-auto pb-20 md:pb-0">
        <h1 className="text-2xl font-bold mb-6">Secure Payment</h1>

        <div className="content-card">
          {isPaid ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-success" size={32} />
              </div>
              <h2 className="text-xl font-semibold">Payment Secured</h2>
              <p className="text-muted-foreground mt-2">
                Your payment is held securely by the platform until the issue is resolved.
              </p>
              <p className="text-sm text-muted-foreground mt-4">(Demo Mode)</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-primary" size={24} />
                <h2 className="font-semibold">Payment Summary</h2>
              </div>

              <div className="space-y-3 border-b border-border pb-4 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ticket</span>
                  <span>{paymentDetails.ticketId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Trainer</span>
                  <span>{paymentDetails.trainer}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service Amount</span>
                  <span>${paymentDetails.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform Fee</span>
                  <span>${paymentDetails.serviceFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between font-semibold mb-6">
                <span>Total</span>
                <span>${paymentDetails.total.toFixed(2)}</span>
              </div>

              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock size={16} />
                  <span>Your payment is protected by escrow</span>
                </div>
              </div>

              <Button onClick={handlePay} className="w-full" size="lg">
                Pay Securely
              </Button>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payment;
