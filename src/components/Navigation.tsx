
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-xl font-semibold text-secondary">
              WriteologyHub
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/course" className="text-secondary hover:text-primary transition-colors">
              Course
            </Link>
            <Link to="/testimonials" className="text-secondary hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link to="/faq" className="text-secondary hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/enroll" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4 px-2 bg-white/95 backdrop-blur-lg animate-fade-down">
              <Link to="/about" className="text-secondary hover:text-primary transition-colors" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/course" className="text-secondary hover:text-primary transition-colors" onClick={toggleMenu}>
                Course
              </Link>
              <Link to="/testimonials" className="text-secondary hover:text-primary transition-colors" onClick={toggleMenu}>
                Testimonials
              </Link>
              <Link to="/faq" className="text-secondary hover:text-primary transition-colors" onClick={toggleMenu}>
                FAQ
              </Link>
              <Link to="/contact" className="text-secondary hover:text-primary transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
              <Link to="/enroll" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors text-center" onClick={toggleMenu}>
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
