
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Phone, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Payment status enum for better state management
enum PaymentStatus {
  NOT_STARTED = "NOT_STARTED",
  INITIATED = "INITIATED",
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

const MpesaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(PaymentStatus.NOT_STARTED);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Clear any existing payment status on component mount
  useEffect(() => {
    localStorage.removeItem("paymentStatus");
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
    // Reset error when user starts typing again
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // Basic validation for Kenyan phone numbers
    // Accepts formats like 07xxxxxxxx, 01xxxxxxxx, 254xxxxxxxx
    const kenyanPhoneRegex = /^(?:254|\+254|0)([71])[0-9]{8}$/;
    return kenyanPhoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    // Validate phone number format
    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Please enter a valid Kenyan phone number (e.g., 07XXXXXXXX)");
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid Kenyan phone number",
        variant: "destructive",
      });
      return;
    }

    // Update UI to show payment initiation
    setPaymentStatus(PaymentStatus.INITIATED);

    try {
      // In a real implementation, you would make an API call to your backend
      // which would then use the M-Pesa API to initiate the STK push
      // Here we simulate the STK push with a timeout
      
      toast({
        title: "Payment initiated",
        description: "Please check your phone for the M-Pesa payment prompt and enter your PIN.",
      });

      // Simulate STK push API call - in a real app, this would call your backend
      // which would integrate with the Safaricom Daraja API
      setPaymentStatus(PaymentStatus.PROCESSING);
      
      // Simulate the STK push and waiting for payment confirmation
      // This would be replaced with an actual call to check payment status
      simulatePaymentProcess();
    } catch (error) {
      handlePaymentFailure("Failed to initiate payment. Please try again.");
    }
  };

  const simulatePaymentProcess = () => {
    // In a real implementation, you would poll your backend to check payment status
    // or use webhooks from M-Pesa to get notified when payment completes
    
    // Simulate random success/failure to demonstrate both paths
    const willSucceed = Math.random() > 0.3; // 70% success rate for demo purposes
    
    setTimeout(() => {
      if (willSucceed) {
        handlePaymentSuccess();
      } else {
        handlePaymentFailure("Payment was canceled or failed. Please try again.");
      }
    }, 5000); // Simulate 5-second processing time
  };

  const handlePaymentSuccess = () => {
    setPaymentStatus(PaymentStatus.SUCCESS);
    
    // Store payment verification status in localStorage
    localStorage.setItem("paymentStatus", "verified");
    
    toast({
      title: "Payment successful!",
      description: "Your payment of KES 300 has been received. You can now create your account.",
    });
    
    // Send confirmation email (simulated)
    console.log(`Sending payment confirmation email to user with phone: ${phoneNumber}`);
    
    // Redirect to signup page after a short delay to allow the user to see the success message
    setTimeout(() => {
      navigate("/signup");
    }, 1500);
  };

  const handlePaymentFailure = (message: string) => {
    setPaymentStatus(PaymentStatus.FAILED);
    setErrorMessage(message);
    
    toast({
      title: "Payment failed",
      description: message,
      variant: "destructive",
    });
  };

  const resetPayment = () => {
    setPaymentStatus(PaymentStatus.NOT_STARTED);
    setErrorMessage(null);
  };

  return (
    <section className="w-full py-12 md:py-20 bg-white dark:bg-secondary/95">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold font-display tracking-tight sm:text-4xl md:text-5xl dark:text-white">
            Complete Your Enrollment
          </h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
            Pay Ksh 300 via M-Pesa to secure your spot in our 2-week writing program and gain access to all learning materials.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="dark:bg-secondary dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-display text-secondary dark:text-white">M-Pesa Payment</CardTitle>
              <CardDescription className="dark:text-gray-300">
                {paymentStatus === PaymentStatus.NOT_STARTED && "Enter your phone number to receive an M-Pesa payment prompt"}
                {paymentStatus === PaymentStatus.INITIATED && "Preparing to send M-Pesa prompt..."}
                {paymentStatus === PaymentStatus.PROCESSING && "M-Pesa prompt sent. Please check your phone..."}
                {paymentStatus === PaymentStatus.SUCCESS && "Payment successful! Proceeding to account creation..."}
                {paymentStatus === PaymentStatus.FAILED && "Payment failed. Please try again."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {errorMessage && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}

              {(paymentStatus === PaymentStatus.NOT_STARTED || paymentStatus === PaymentStatus.FAILED) && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className={cn(
                          "pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white",
                          validatePhoneNumber(phoneNumber) && "border-green-500"
                        )}
                        placeholder="e.g. 07XX XXX XXX"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        maxLength={10}
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        You'll receive a payment prompt on this number
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Pay KES 300 with M-Pesa
                    </button>
                  </div>
                </form>
              )}

              {(paymentStatus === PaymentStatus.INITIATED || paymentStatus === PaymentStatus.PROCESSING) && (
                <div className="flex flex-col items-center justify-center py-6 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Processing Payment</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {paymentStatus === PaymentStatus.INITIATED 
                        ? "Sending payment request to your phone..." 
                        : "Please enter your M-Pesa PIN when prompted on your phone"}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 max-w-xs text-center">
                    This may take a few moments. Please don't refresh or close this page.
                  </p>
                  
                  <button
                    onClick={resetPayment}
                    className="text-sm text-primary hover:underline mt-4"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {paymentStatus === PaymentStatus.SUCCESS && (
                <div className="flex flex-col items-center justify-center py-6 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-green-600">Payment Successful!</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Your payment of KES 300 has been received
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 max-w-xs text-center">
                    Redirecting you to create your account...
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                After payment confirmation, you'll create an account to access all course materials and receive a confirmation email.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/320px-M-PESA_LOGO-01.svg.png" 
                  alt="M-Pesa Logo" 
                  className="h-8"
                />
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Having trouble with payment? Contact us at WriteologyHub@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MpesaPayment;
