
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Video, Download, Lock } from "lucide-react";

const LearningMaterials = () => {
  const [isPaymentVerified, setIsPaymentVerified] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if payment has been verified from localStorage
    const paymentStatus = localStorage.getItem("paymentStatus");
    if (paymentStatus === "verified") {
      setIsPaymentVerified(true);
    } else {
      // If not verified, redirect to homepage
      navigate("/");
      return;
    }

    // Check if user is authenticated
    const userData = localStorage.getItem("userData");
    const accessToken = localStorage.getItem("accessToken");
    
    if (userData && accessToken) {
      const parsed = JSON.parse(userData);
      if (parsed.isAuthenticated) {
        setIsAuthenticated(true);
      } else {
        // If payment is verified but not authenticated, redirect to login
        navigate("/login");
      }
    } else {
      // If payment is verified but not authenticated, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  if (!isPaymentVerified || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">Access Restricted</CardTitle>
            <CardDescription className="text-center">
              {!isPaymentVerified 
                ? "Payment verification required" 
                : "Authentication required"}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Lock className="h-16 w-16 text-gray-400 mb-4" />
            <p className="text-center">
              {!isPaymentVerified 
                ? "You need to complete payment to access learning materials."
                : "You need to log in to access learning materials."}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button
              onClick={() => navigate(!isPaymentVerified ? "/" : "/login")}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              {!isPaymentVerified ? "Return to Homepage" : "Go to Login"}
            </button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8">
            Your Learning Materials
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-secondary/80 mb-12">
            <p>
              Welcome to your course materials! Below you'll find all the resources
              you need to succeed in our writing program. If you have any questions,
              please reach out to our support team.
            </p>
            <p>
              You can also access a more comprehensive dashboard of courses by visiting your 
              <button 
                onClick={() => navigate("/dashboard")}
                className="text-primary font-medium hover:underline ml-1"
              >
                course dashboard
              </button>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <CardTitle>Module 1: Introduction to Writing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Learn the fundamentals of effective writing and discover your unique voice.</p>
                <div className="space-y-4">
                  <div className="flex items-center p-3 border rounded hover:bg-gray-50 transition-colors">
                    <FileText className="h-5 w-5 text-primary mr-3" />
                    <span className="flex-1">Course Guide (PDF)</span>
                    <button className="text-primary flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                  <div className="flex items-center p-3 border rounded hover:bg-gray-50 transition-colors">
                    <Video className="h-5 w-5 text-primary mr-3" />
                    <span className="flex-1">Welcome Video</span>
                    <button className="text-primary">Watch</button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <CardTitle>Module 2: Crafting Your Narrative</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Master the art of storytelling and engage your readers from start to finish.</p>
                <div className="space-y-4">
                  <div className="flex items-center p-3 border rounded hover:bg-gray-50 transition-colors">
                    <FileText className="h-5 w-5 text-primary mr-3" />
                    <span className="flex-1">Narrative Techniques (PDF)</span>
                    <button className="text-primary flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                  <div className="flex items-center p-3 border rounded hover:bg-gray-50 transition-colors">
                    <Video className="h-5 w-5 text-primary mr-3" />
                    <span className="flex-1">Storytelling Workshop</span>
                    <button className="text-primary">Watch</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningMaterials;
