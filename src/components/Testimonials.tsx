
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Award, MessageCircle, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Imani Adebayo",
    role: "Software Development Student",
    quote: "The structured curriculum and mentorship helped me transition from a complete beginner to building my own web applications in just three months. The one-time orientation session was incredibly helpful for setting expectations.",
    avatar: "https://images.unsplash.com/photo-1599837841384-920e264a592a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "IA",
    rating: 5
  },
  {
    id: 2,
    name: "Jamal Ochieng",
    role: "Technical Writing Graduate",
    quote: "As a high school leaver without clear career direction, this platform opened my eyes to technical writing. The self-paced nature allowed me to learn while working part-time, and the community support was invaluable.",
    avatar: "https://images.unsplash.com/photo-1559548334-790c6824ef60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "JO",
    rating: 5
  },
  {
    id: 3,
    name: "Aisha Kamau",
    role: "SEO Writing Student",
    quote: "The course material is comprehensive and practical. I've already started freelancing with the skills I've learned, even before completing the program. The MPesa payment process was smooth and secure.",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "AK",
    rating: 4
  },
  {
    id: 4,
    name: "Kofi Ndungu",
    role: "Copywriting Graduate",
    quote: "I was skeptical about online learning, but the quality of instruction and the supportive community changed my mind. I've now been hired by a marketing agency, all thanks to the skills and portfolio I built here.",
    avatar: "https://images.unsplash.com/photo-1541534741730-6a9aa2fe70c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "KN",
    rating: 5
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1 mt-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          fill={i < rating ? "currentColor" : "none"} 
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full py-16 bg-neutral-100 dark:bg-secondary/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-display tracking-tight sm:text-4xl md:text-5xl text-secondary dark:text-white">
            What Our Students Say
          </h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
            Hear from students who have transformed their careers through our online learning platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover-lift overflow-hidden group dark:neo-blur dark:border-neutral-700">
              <CardHeader className="pb-2 relative">
                <div className="flex items-center space-x-4">
                  <Avatar className="border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-white">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-medium dark:text-white">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    <RatingStars rating={testimonial.rating} />
                  </div>
                </div>
                <div className="absolute top-3 right-3 text-neutral-300 dark:text-primary/20 opacity-70">
                  <Quote size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 italic relative">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Verified Student</span>
                  <MessageCircle size={16} className="text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
