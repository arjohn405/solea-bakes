import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedCheesecakes from "@/components/FeaturedCheesecakes";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCheesecakes />
      <Process />
      <Testimonials />
      <OrderCTA />
      <Footer />
    </div>
  );
};

export default Index;
