
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, User, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword || !name) {
      toast({
        title: "Invalid input",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // In a real app, this would be an API call to create a user account and send an email
    // For now, we'll simulate account creation and email sending
    setTimeout(() => {
      // Store user info in localStorage for this demo
      // In a real app, this would be handled by a proper auth system
      const userData = {
        email,
        name,
        isAuthenticated: false, // Changed to false until email is verified
        emailVerified: false,
      };
      
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("accessToken", "demo-token-" + Math.random().toString(36).substring(2));
      
      toast({
        title: "Account created",
        description: "A confirmation email has been sent to your email address. Please verify your email to activate your account.",
      });
      
      // Simulate email sending
      setIsSubmitting(false);
      setEmailSent(true);
      
      // In a real implementation, we'd create a backend account
      // and handle proper authentication and email verification
    }, 1000);
  };

  const handleResendEmail = () => {
    toast({
      title: "Confirmation email resent",
      description: "Please check your inbox and follow the instructions to verify your account.",
    });
  };

  if (emailSent) {
    return (
      <section className="w-full py-12 md:py-20 bg-white dark:bg-secondary/95">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="dark:bg-secondary dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-display text-secondary dark:text-white">Email Verification</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Please verify your email address
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-secondary dark:text-white">Check your inbox</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We've sent a verification email to <span className="font-medium text-secondary dark:text-white">{email}</span>. 
                    Click the link in the email to activate your account.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md text-left mt-6 border-l-4 border-blue-500">
                    <div className="flex">
                      <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          After verifying your email, you will also receive a welcome email with course enrollment confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Didn't receive the email? Check your spam folder or
                </p>
                <button 
                  onClick={handleResendEmail}
                  className="text-primary hover:underline text-sm"
                >
                  Resend verification email
                </button>
                <button 
                  onClick={() => navigate("/")}
                  className="w-full bg-secondary text-white dark:bg-white dark:text-secondary mt-2 py-2 px-4 rounded-md hover:bg-secondary/90 dark:hover:bg-white/90 transition-colors"
                >
                  Return to Home
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-20 bg-white dark:bg-secondary/95">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold font-display tracking-tight sm:text-4xl md:text-5xl dark:text-white">
            Create Your Account
          </h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
            Set up your account to access all our writing courses and resources.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="dark:bg-secondary dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-display text-secondary dark:text-white">Sign Up</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Create an account to access all courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className={cn(
                        "pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white",
                        password && confirmPassword && password === confirmPassword && "border-green-500"
                      )}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <button 
                  className="flex items-center space-x-2 p-2 border rounded-md dark:border-gray-700 dark:bg-gray-800"
                  onClick={() => toast({
                    title: "Google Sign-In",
                    description: "Google authentication would be implemented in a production version.",
                  })}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                    </g>
                  </svg>
                  <span className="dark:text-white">Sign in with Google</span>
                </button>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Already have an account? <button 
              className="text-primary hover:underline" 
              onClick={() => navigate("/login")}
            >
              Login here
            </button></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
