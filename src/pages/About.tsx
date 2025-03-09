
import Navigation from "@/components/Navigation";
import { BookOpen, PenTool, FileText, Zap, GraduationCap, BookText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8 animate-fade-up">
            About WriteologyHub
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-secondary/80 animate-fade-up">
            <p>
              Welcome to WriteologyHub, your gateway to mastering academic and creative writing. 
              Our intensive 2-week program is specifically designed for high school graduates 
              preparing to excel in university.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-secondary mt-12">
              Our Purpose
            </h2>
            <p>
              We believe that strong writing skills are fundamental to academic success. 
              Our program bridges the gap between high school and university writing requirements, 
              giving you the confidence and skills you need to excel in your academic journey.
            </p>
            
            <h2 className="font-display text-2xl font-semibold text-secondary mt-12">
              Program Benefits
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                <span>Enhanced writing skills across various academic formats</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                <span>Increased confidence in expressing ideas clearly and effectively</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                <span>Expert guidance from experienced writing instructors</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                <span>Practical preparation for university assignments</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                <span>Interactive learning environment with peer feedback</span>
              </li>
            </ul>
            
            <h2 className="font-display text-2xl font-semibold text-secondary mt-12">
              Our Approach
            </h2>
            <p>
              Through a combination of live interactive sessions, practical exercises, 
              and personalized feedback, we help students develop the critical writing 
              skills needed for university success. Our experienced instructors create 
              a supportive learning environment where students can grow and thrive.
            </p>

            <h2 className="font-display text-2xl font-semibold text-secondary mt-12">
              Our Courses
            </h2>
          </div>
          
          {/* Courses Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Blogging</h3>
              </div>
              <p className="text-secondary/80">
                Learn to create engaging blog content that captures readers' attention and builds a loyal audience. Master the art of storytelling and personal branding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Freelance Writing</h3>
              </div>
              <p className="text-secondary/80">
                Discover how to build a successful freelance writing career. Learn client acquisition, project management, and how to deliver high-quality content consistently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">SEO Writing</h3>
              </div>
              <p className="text-secondary/80">
                Master the techniques of creating content optimized for search engines while maintaining readability and engagement for human readers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Copywriting</h3>
              </div>
              <p className="text-secondary/80">
                Learn to write persuasive copy that converts readers into customers. Master headlines, calls-to-action, and emotional triggers that drive action.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <BookText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Technical Writing</h3>
              </div>
              <p className="text-secondary/80">
                Develop skills to explain complex concepts clearly and concisely. Learn to create documentation, guides, and instructional materials for technical audiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Academic Writing</h3>
              </div>
              <p className="text-secondary/80">
                Master the fundamentals of scholarly writing including research methods, citation styles, and constructing compelling arguments for academic audiences.
              </p>
            </div>
          </div>
          
          {/* Course Button */}
          <div className="mt-12 text-center animate-fade-up">
            <Link 
              to="/course" 
              className="bg-primary/10 text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2 font-medium"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
