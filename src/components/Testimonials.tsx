
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Joyce Mwangi",
    role: "Software Development Student",
    quote: "The structured curriculum and mentorship helped me transition from a complete beginner to building my own web applications in just three months. The one-time orientation session was incredibly helpful for setting expectations.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    initials: "JM"
  },
  {
    id: 2,
    name: "David Ochieng",
    role: "Technical Writing Graduate",
    quote: "As a high school leaver without clear career direction, this platform opened my eyes to technical writing. The self-paced nature allowed me to learn while working part-time, and the community support was invaluable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    initials: "DO"
  },
  {
    id: 3,
    name: "Sarah Kamau",
    role: "SEO Writing Student",
    quote: "The course material is comprehensive and practical. I've already started freelancing with the skills I've learned, even before completing the program. The MPesa payment process was smooth and secure.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&auto=format&fit=crop",
    initials: "SK"
  },
  {
    id: 4,
    name: "Michael Ndungu",
    role: "Copywriting Graduate",
    quote: "I was skeptical about online learning, but the quality of instruction and the supportive community changed my mind. I've now been hired by a marketing agency, all thanks to the skills and portfolio I built here.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    initials: "MN"
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
