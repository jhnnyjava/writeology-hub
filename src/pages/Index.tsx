
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import MpesaPayment from "@/components/MpesaPayment";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <MpesaPayment />
    </main>
  );
};

export default Index;
