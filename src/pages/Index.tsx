import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedCheesecakes from "@/components/FeaturedCheesecakes";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <FeaturedCheesecakes />
      <OrderCTA />
      <Footer />
    </div>
  );
};

export default Index;
