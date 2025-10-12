import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cheesecakes } from "@/data/cheesecakes";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">
              Our Cheesecake Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Explore our exquisite collection of handcrafted cheesecakes. 
              Click on any cheesecake to learn more about its unique flavors and ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cheesecakes.map((cake, index) => (
              <Card
                key={cake.id}
                className="overflow-hidden border-border hover:shadow-elegant transition-all duration-300 cursor-pointer animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/cheesecake/${cake.id}`)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cake.name}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {cake.description}
                  </p>
                  <p className="text-primary font-playfair text-xl font-semibold">
                    {cake.price}
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
