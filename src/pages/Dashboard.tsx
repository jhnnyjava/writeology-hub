
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ExternalLink, BookOpen, PenTool, Search, Edit, FileText, GraduationCap, BookText, LogOut } from "lucide-react";

// Course type definition
interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  externalLink: string;
  icon: React.ReactNode;
}

const Dashboard = () => {
  const [userName, setUserName] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isPaymentVerified, setIsPaymentVerified] = useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check payment verification
    const paymentStatus = localStorage.getItem("paymentStatus");
    if (paymentStatus === "verified") {
      setIsPaymentVerified(true);
    } else {
      navigate("/");
      return;
    }

    // Check authentication status
    const storedUserData = localStorage.getItem("userData");
    const accessToken = localStorage.getItem("accessToken");
    
    if (storedUserData && accessToken) {
      const userData = JSON.parse(storedUserData);
      if (userData.isAuthenticated) {
        setIsAuthenticated(true);
        setUserName(userData.name || "User");
      } else {
        navigate("/login");
      }
    } else {
      // Redirect to signup after payment is verified but user is not authenticated
      navigate("/signup");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear authentication status but leave payment verification
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      userData.isAuthenticated = false;
      localStorage.setItem("userData", JSON.stringify(userData));
    }
    localStorage.removeItem("accessToken");
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    navigate("/login");
  };

  // List of courses with their categories and external links
  const courses: Course[] = [
    {
      id: "blog-1",
      title: "Start a Blog",
      description: "Learn the fundamentals of blogging and create your own successful blog.",
      category: "Blogging",
      externalLink: "https://learndigital.withgoogle.com/digitalgarage/",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      id: "blog-2",
      title: "Blogging Course",
      description: "Master the art of blogging with HubSpot's comprehensive course.",
      category: "Blogging",
      externalLink: "https://academy.hubspot.com/",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      id: "freelance-1",
      title: "Writing for Online Success",
      description: "Learn how to succeed as a freelance writer in the digital world.",
      category: "Freelance Writing",
      externalLink: "https://www.coursera.org/",
      icon: <PenTool className="h-6 w-6 text-primary" />
    },
    {
      id: "freelance-2",
      title: "Freelance Writing for Beginners",
      description: "Start your freelance writing career with this beginner-friendly course.",
      category: "Freelance Writing",
      externalLink: "https://www.udemy.com/",
      icon: <PenTool className="h-6 w-6 text-primary" />
    },
    {
      id: "seo-1",
      title: "Free SEO Training",
      description: "Learn search engine optimization techniques to improve your content visibility.",
      category: "SEO Writing",
      externalLink: "https://yoast.com/academy/",
      icon: <Search className="h-6 w-6 text-primary" />
    },
    {
      id: "seo-2",
      title: "SEO Fundamentals",
      description: "Master the fundamentals of SEO and improve your content's search ranking.",
      category: "SEO Writing",
      externalLink: "https://learndigital.withgoogle.com/digitalgarage/",
      icon: <Search className="h-6 w-6 text-primary" />
    },
    {
      id: "copy-1",
      title: "Free Copywriting Course",
      description: "Learn the essentials of copywriting to create compelling content.",
      category: "Copywriting",
      externalLink: "https://copyblogger.com/",
      icon: <Edit className="h-6 w-6 text-primary" />
    },
    {
      id: "copy-2",
      title: "Copywriting Essentials",
      description: "Master the essentials of copywriting with HubSpot's comprehensive course.",
      category: "Copywriting",
      externalLink: "https://academy.hubspot.com/",
      icon: <Edit className="h-6 w-6 text-primary" />
    },
    {
      id: "tech-1",
      title: "Technical Writing Course",
      description: "Learn how to create clear and effective technical documentation.",
      category: "Technical Writing",
      externalLink: "https://developers.google.com/tech-writing",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      id: "tech-2",
      title: "Technical Writing",
      description: "Master the art of technical writing with this comprehensive course.",
      category: "Technical Writing",
      externalLink: "https://www.coursera.org/",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      id: "academic-1",
      title: "Academic Writing Essentials",
      description: "Learn the essentials of academic writing with Harvard's comprehensive course.",
      category: "Academic Writing",
      externalLink: "https://online-learning.harvard.edu/",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      id: "academic-2",
      title: "English for Academic Purposes",
      description: "Improve your academic writing skills with this comprehensive course.",
      category: "Academic Writing",
      externalLink: "https://www.edx.org/",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    }
  ];

  // Group courses by category
  const coursesByCategory = courses.reduce((acc: {[key: string]: Course[]}, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  if (!isAuthenticated || !isPaymentVerified) {
    return null; // Will redirect in useEffect
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary">
              Welcome, {userName}
            </h1>
            <p className="text-gray-600 mt-2">
              Explore your writing courses and continue your learning journey.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
        
        <div className="space-y-12">
          {Object.entries(coursesByCategory).map(([category, courses]) => (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-secondary flex items-center">
                {category === "Blogging" && <BookText className="h-6 w-6 text-primary mr-2" />}
                {category === "Freelance Writing" && <PenTool className="h-6 w-6 text-primary mr-2" />}
                {category === "SEO Writing" && <Search className="h-6 w-6 text-primary mr-2" />}
                {category === "Copywriting" && <Edit className="h-6 w-6 text-primary mr-2" />}
                {category === "Technical Writing" && <FileText className="h-6 w-6 text-primary mr-2" />}
                {category === "Academic Writing" && <GraduationCap className="h-6 w-6 text-primary mr-2" />}
                {category} Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          {course.icon}
                        </div>
                        <CardTitle className="text-lg font-display">{course.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 min-h-[60px]">
                        {course.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <a
                        href={course.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors w-full justify-center"
                      >
                        <span>Start Course</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
