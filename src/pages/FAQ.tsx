
import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8 animate-fade-up">
            Frequently Asked Questions
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-secondary/80 animate-fade-up mb-8">
            <p>
              Find answers to common questions about our program, enrollment process, and more.
              If you don't see your question answered here, feel free to contact us.
            </p>
          </div>
          
          <div className="mt-8 animate-fade-up">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  What is WriteologyHub?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  WriteologyHub is an intensive 2-week online writing program designed specifically for high school graduates 
                  preparing to excel in university. We focus on developing strong academic and creative writing skills through 
                  a combination of self-paced learning and community support.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  How much does the program cost?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  Our program costs only Ksh 300, making it accessible to students from all backgrounds. 
                  This one-time payment gives you access to all course materials, the live orientation session, 
                  and a certificate upon completion.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  How do I enroll in the program?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  Enrollment is simple! First, fill out our registration form by clicking the "Enroll Now" button. 
                  After registration, you'll be directed to make payment via MPESA. Once your payment is verified, 
                  you'll receive immediate access to the course materials and details about the upcoming orientation session.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  What happens after I pay?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  After successful payment, you'll receive an email with your login credentials for the student dashboard, 
                  access to all course materials, and details about the orientation session. You can begin learning immediately, 
                  and our system will track your progress throughout the program.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  Is the program completely online?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  Yes, the program is fully online, allowing you to learn from anywhere. The only live component is a one-time 
                  orientation session where you'll meet your instructors and fellow students. All other learning materials are 
                  available for self-paced study through our platform.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  What courses are included in the program?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  Our program includes six comprehensive courses: Blogging, Freelance Writing, SEO Writing, Copywriting, 
                  Technical Writing, and Academic Writing. Each course includes video lessons, reading materials, practical 
                  exercises, and assessments to build your skills.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  How long do I have access to the course materials?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  You'll have access to all course materials for six months after enrollment, allowing you plenty of time 
                  to complete the program at your own pace and revisit materials as needed for reinforcement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  Will I receive a certificate?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  Yes! Upon completion of all course requirements, you'll receive a digital certificate that you can add to 
                  your portfolio, resume, or LinkedIn profile. This certificate verifies your participation and the skills 
                  you've developed through our program.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  Is there community support available?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  Absolutely! All enrolled students gain access to our community platform where you can connect with peers, 
                  ask questions, and participate in discussions. We also provide mentorship opportunities where advanced 
                  learners can guide beginners.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg font-medium text-secondary">
                  What if I need help during the program?
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80">
                  We provide multiple support channels for students. You can post questions in the community forum, 
                  reach out to mentors, or contact our support team directly. We're committed to helping you succeed 
                  throughout your learning journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="mt-12 text-center animate-fade-up">
            <p className="mb-4 text-secondary/80">Still have questions? We're here to help!</p>
            <a 
              href="mailto:support@writeologyhub.com" 
              className="text-primary hover:underline font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
