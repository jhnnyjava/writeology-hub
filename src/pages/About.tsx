
import Navigation from "@/components/Navigation";

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
          </div>
        </div>
      </section>
    </main>
  );
}
