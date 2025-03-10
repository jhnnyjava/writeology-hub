
import React from "react";
import { BookOpen, Users, Calendar, Award, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Self-Paced Learning",
    description: "Access comprehensive course materials anytime, anywhere. Learn at your own pace through video lessons, reading materials, and interactive quizzes."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Community Support",
    description: "Join a vibrant community of learners. Connect with peers, participate in discussions, and benefit from mentorship by advanced students."
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Live Orientation",
    description: "Kickstart your learning journey with a one-time live orientation session where you'll meet instructors and fellow students."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Course Certification",
    description: "Receive a professional certificate upon course completion to showcase your newly acquired skills to potential employers."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "2-Week Program",
    description: "Transform your writing skills in just two weeks with our intensive, structured curriculum designed for high school graduates."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure Payments",
    description: "Enjoy hassle-free enrollment with secure MPesa payment integration, allowing instant access to course materials upon verification."
  }
];

const Features = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-display tracking-tight sm:text-4xl md:text-5xl">
            Why Choose WriteologyHub?
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Our platform offers a unique learning experience tailored specifically for university-bound students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-neutral-200 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display text-secondary">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeV0ngDVQcjr78aAWGUo2bLavshySbpfmXMrEgIwsxqoI4v7A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors"
          >
            Start Your Learning Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
