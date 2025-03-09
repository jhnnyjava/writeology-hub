
import Navigation from "@/components/Navigation";
import { BookOpen, PenTool, FileText, Zap, GraduationCap, BookText } from "lucide-react";

export default function Course() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8 animate-fade-up">
            Our Courses
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-secondary/80 animate-fade-up">
            <p>
              At WriteologyHub, we offer a comprehensive range of writing courses 
              designed to help you excel in different writing domains. Each course is 
              crafted by industry experts and focuses on practical skills that you can 
              apply immediately.
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up">
            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Blogging</h3>
              </div>
              <p className="text-secondary/80">
                Learn to create engaging blog content that captures readers' attention and builds a loyal audience. Master the art of storytelling and personal branding.
              </p>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Content creation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Audience building techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Personal voice development</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Freelance Writing</h3>
              </div>
              <p className="text-secondary/80">
                Discover how to build a successful freelance writing career. Learn client acquisition, project management, and how to deliver high-quality content consistently.
              </p>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Client acquisition strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Project management skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Setting competitive rates</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">SEO Writing</h3>
              </div>
              <p className="text-secondary/80">
                Master the techniques of creating content optimized for search engines while maintaining readability and engagement for human readers.
              </p>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Keyword research fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>On-page optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Content that ranks and converts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Copywriting</h3>
              </div>
              <p className="text-secondary/80">
                Learn to write persuasive copy that converts readers into customers. Master headlines, calls-to-action, and emotional triggers that drive action.
              </p>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Writing compelling headlines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Creating effective CTAs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Conversion-focused content</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <BookText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Technical Writing</h3>
              </div>
              <p className="text-secondary/80">
                Develop skills to explain complex concepts clearly and concisely. Learn to create documentation, guides, and instructional materials for technical audiences.
              </p>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Documentation standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Simplifying complex information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>API and software documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 hover:border-primary transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">Academic Writing</h3>
              </div>
              <p className="text-secondary/80">
                Master the fundamentals of scholarly writing including research methods, citation styles, and constructing compelling arguments for academic audiences.
              </p>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Research methodology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Citation styles (APA, MLA, Chicago)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">✓</span>
                    <span>Thesis development and argumentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeV0ngDVQcjr78aAWGUo2bLavshySbpfmXMrEgIwsxqoI4v7A/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors inline-flex items-center font-medium"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
