import { Card, CardContent } from "@/components/ui/card";
import { Heart, ChefHat, Sparkles, Package } from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Select Your Flavor",
    description: "Choose from our curated collection of signature cheesecakes or request a custom flavor."
  },
  {
    icon: ChefHat,
    title: "Handcrafted With Love",
    description: "Each cheesecake is made fresh to order using premium ingredients and traditional techniques."
  },
  {
    icon: Sparkles,
    title: "Perfected & Decorated",
    description: "We add the finishing touches with elegant decorations and premium toppings."
  },
  {
    icon: Package,
    title: "Ready For You",
    description: "Your cheesecake is carefully packaged and prepared for pickup or delivery."
  }
];

const Process = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            From Our Kitchen to Your Table
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Every Soléa Bakes cheesecake goes through our meticulous four-step process 
            to ensure perfection in every slice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="border-border hover:shadow-elegant transition-all duration-300 animate-scale-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="w-8 h-8 mx-auto rounded-full bg-muted flex items-center justify-center font-playfair font-bold text-foreground">
                  {index + 1}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
