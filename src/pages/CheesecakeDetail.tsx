import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cheesecakes } from "@/data/cheesecakes";

const CheesecakeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cheesecake = cheesecakes.find(c => c.id === id);

  if (!cheesecake) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Cheesecake Not Found
          </h1>
          <Button onClick={() => navigate("/gallery")}>
            Back to Gallery
          </Button>
        </div>
      </div>
    );
  }

  const handleOrderClick = () => {
    window.open('YOUR_GOOGLE_FORM_URL', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/gallery")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-elegant aspect-square">
                <img
                  src={cheesecake.image}
                  alt={cheesecake.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {cheesecake.name}
                </h1>
                <p className="text-3xl font-playfair font-semibold text-primary">
                  {cheesecake.price}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  {cheesecake.fullDescription}
                </p>

                <div className="flex items-center gap-2 text-muted-foreground font-inter">
                  <span className="font-semibold">Servings:</span>
                  <span>{cheesecake.servings}</span>
                </div>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {cheesecake.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground font-inter">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground">
                    Premium Ingredients
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {cheesecake.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground font-inter"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleOrderClick}
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant hover:shadow-glow text-lg py-6"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order This Cheesecake
              </Button>
            </div>
          </div>

          {/* Related Cheesecakes */}
          <div className="mt-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              More Delicious Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cheesecakes
                .filter(c => c.id !== cheesecake.id)
                .slice(0, 2)
                .map((cake) => (
                  <Card
                    key={cake.id}
                    className="overflow-hidden border-border hover:shadow-elegant transition-all duration-300 cursor-pointer group"
                    onClick={() => navigate(`/cheesecake/${cake.id}`)}
                  >
                    <div className="relative overflow-hidden aspect-video">
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
                      <p className="text-primary font-playfair text-xl font-semibold">
                        {cake.price}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheesecakeDetail;
