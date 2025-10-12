import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cheesecake.jpg";

const Hero = () => {
  const handleOrderClick = () => {
    // Replace with your actual Google Form URL
    window.open('YOUR_GOOGLE_FORM_URL', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Soléa Bakes
          </h1>
          <p className="font-playfair text-2xl md:text-3xl text-primary italic">
            Homemade Cheesecakes Made with Passion
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Indulge in rich, creamy cheesecakes crafted with premium ingredients and 
            endless love. Every slice is a celebration of flavor and elegance.
          </p>
          <div className="pt-4">
            <Button 
              onClick={handleOrderClick}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant hover:shadow-glow text-lg px-8 py-6 rounded-full font-inter font-medium"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
