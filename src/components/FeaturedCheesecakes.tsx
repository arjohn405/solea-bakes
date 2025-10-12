import { Card, CardContent } from "@/components/ui/card";
import classicImage from "@/assets/classic-cheesecake.jpg";
import chocolateImage from "@/assets/chocolate-cheesecake.jpg";
import strawberryImage from "@/assets/strawberry-cheesecake.jpg";

const cheesecakes = [
  {
    name: "Classic Original",
    description: "Our signature New York-style cheesecake with a buttery graham cracker crust",
    image: classicImage,
  },
  {
    name: "Chocolate Decadence",
    description: "Rich chocolate cheesecake topped with silky ganache and chocolate shavings",
    image: chocolateImage,
  },
  {
    name: "Strawberry Bliss",
    description: "Creamy cheesecake crowned with fresh glazed strawberries",
    image: strawberryImage,
  },
];

const FeaturedCheesecakes = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Featured Creations
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Explore our most beloved cheesecakes, each crafted to perfection with 
            premium ingredients and timeless recipes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cheesecakes.map((cake, index) => (
            <Card 
              key={cake.name} 
              className="overflow-hidden border-border hover:shadow-elegant transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  {cake.name}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {cake.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCheesecakes;
