
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-secondary/90 backdrop-blur-lg z-50 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-xl font-semibold text-secondary dark:text-white">
              WriteologyHub
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-secondary dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/course" className="text-secondary dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors">
              Course
            </Link>
            <Link to="/testimonials" className="text-secondary dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link to="/faq" className="text-secondary dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors">
              FAQ
            </Link>
            <a 
              href="mailto:WriteologyHub@gmail.com" 
              className="text-secondary dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
            >
              <Mail size={16} className="mr-1" />
              Contact
            </a>
            <DarkModeToggle />
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeV0ngDVQcjr78aAWGUo2bLavshySbpfmXMrEgIwsxqoI4v7A/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="text-secondary dark:text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4 px-2 bg-white/95 dark:bg-secondary/95 backdrop-blur-lg animate-fade-down">
              <Link to="/about" className="text-secondary dark:text-white hover:text-primary transition-colors" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/course" className="text-secondary dark:text-white hover:text-primary transition-colors" onClick={toggleMenu}>
                Course
              </Link>
              <Link to="/testimonials" className="text-secondary dark:text-white hover:text-primary transition-colors" onClick={toggleMenu}>
                Testimonials
              </Link>
              <Link to="/faq" className="text-secondary dark:text-white hover:text-primary transition-colors" onClick={toggleMenu}>
                FAQ
              </Link>
              <a 
                href="mailto:WriteologyHub@gmail.com" 
                className="text-secondary dark:text-white hover:text-primary transition-colors flex items-center"
                onClick={toggleMenu}
              >
                <Mail size={16} className="mr-1" />
                Contact
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeV0ngDVQcjr78aAWGUo2bLavshySbpfmXMrEgIwsxqoI4v7A/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors text-center" 
                onClick={toggleMenu}
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
