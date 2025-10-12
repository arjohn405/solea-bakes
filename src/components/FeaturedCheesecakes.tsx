import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cheesecakes } from "@/data/cheesecakes";

const FeaturedCheesecakes = () => {
  const navigate = useNavigate();
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
              key={cake.id} 
              className="overflow-hidden border-border hover:shadow-elegant transition-all duration-300 animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/cheesecake/${cake.id}`)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="font-playfair text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cake.name}
                </h3>
                <p className="text-muted-foreground font-inter">
                  {cake.description}
                </p>
                <Button
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/cheesecake/${cake.id}`);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={() => navigate("/gallery")}
            variant="outline"
            size="lg"
            className="font-inter"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCheesecakes;
