
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-neutral-100">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Students writing"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-3xl">
          <span className="inline-block animate-fade-down">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Limited Time Offer
            </span>
          </span>
          
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold text-secondary animate-fade-up">
            Master Academic & Creative Writing in Just 2 Weeks
          </h1>
          
          <p className="mt-6 text-lg text-secondary/80 max-w-2xl animate-fade-up">
            Join our expert-led online writing program designed specifically for university-bound students. 
            Transform your writing skills for only Ksh 300!
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeV0ngDVQcjr78aAWGUo2bLavshySbpfmXMrEgIwsxqoI4v7A/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors"
            >
              Enroll Now for Ksh 300
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            
            <Link
              to="/course"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-secondary bg-white hover:bg-neutral-100 transition-colors"
            >
              View Course Details
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-up">
            {[
              { label: "Live Sessions", value: "Interactive Classes" },
              { label: "Duration", value: "2 Weeks" },
              { label: "Certificate", value: "Upon Completion" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur rounded-lg p-6">
                <p className="text-sm text-secondary/60 font-medium">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-secondary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
