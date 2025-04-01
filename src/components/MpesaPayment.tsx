
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Phone, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const MpesaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number (simple validation for Kenya numbers)
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid Kenyan phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment successful",
        description: "Your payment has been verified. Create an account to access the course materials.",
      });
      
      // Store payment verification status in localStorage
      localStorage.setItem("paymentStatus", "verified");
      
      // Redirect to signup page instead of learning materials
      setIsSubmitting(false);
      navigate("/signup");
      
      // In a real implementation, you would make an API call to your backend
      // to initiate the M-Pesa payment process and handle the callback
    }, 1500);
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
                Enter your phone number to receive an M-Pesa payment prompt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-2">
                  <CreditCard className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-medium text-secondary dark:text-white">Payment Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Paybill Number:</span>
                    <span className="font-bold">247247</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Account Number:</span>
                    <span className="font-bold">0705236999</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-bold">Ksh 300</span>
                  </li>
                </ul>
              </div>
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
                        phoneNumber.length === 10 && "border-green-500"
                      )}
                      placeholder="e.g. 07XX XXX XXX"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      maxLength={10}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : "Pay with M-Pesa"}
                  </button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                After payment confirmation, you'll create an account to access all course materials.
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
