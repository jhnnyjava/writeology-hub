
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Imani Adebayo",
    role: "Software Development Student",
    quote: "The structured curriculum and mentorship helped me transition from a complete beginner to building my own web applications in just three months. The one-time orientation session was incredibly helpful for setting expectations.",
    avatar: "https://images.unsplash.com/photo-1599837841384-920e264a592a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "IA"
  },
  {
    id: 2,
    name: "Jamal Ochieng",
    role: "Technical Writing Graduate",
    quote: "As a high school leaver without clear career direction, this platform opened my eyes to technical writing. The self-paced nature allowed me to learn while working part-time, and the community support was invaluable.",
    avatar: "https://images.unsplash.com/photo-1559548334-790c6824ef60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "JO"
  },
  {
    id: 3,
    name: "Aisha Kamau",
    role: "SEO Writing Student",
    quote: "The course material is comprehensive and practical. I've already started freelancing with the skills I've learned, even before completing the program. The MPesa payment process was smooth and secure.",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "AK"
  },
  {
    id: 4,
    name: "Kofi Ndungu",
    role: "Copywriting Graduate",
    quote: "I was skeptical about online learning, but the quality of instruction and the supportive community changed my mind. I've now been hired by a marketing agency, all thanks to the skills and portfolio I built here.",
    avatar: "https://images.unsplash.com/photo-1541534741730-6a9aa2fe70c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    initials: "KN"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-16 bg-neutral-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold font-display tracking-tight sm:text-4xl md:text-5xl">
            What Our Students Say
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Hear from students who have transformed their careers through our online learning platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-medium">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
