import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OrderCTA = () => {
  const handleOrderClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfCd_-H5o5S5sGm82WStA_Ji7FH7fXbbtm6aaHaJwYjsCX4SA/viewform?pli=1', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground">
            Ready to Indulge?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-inter max-w-2xl mx-auto">
            Place your order today and experience the perfect blend of creamy texture, 
            rich flavor, and artisanal craftsmanship. Your taste buds will thank you!
          </p>
          <Button 
            onClick={handleOrderClick}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-elegant hover:shadow-glow text-lg px-8 py-6 rounded-full font-inter font-medium"
          >
            Order Your Cheesecake
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderCTA;
