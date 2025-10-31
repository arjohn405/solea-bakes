import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-cheesecake.jpg";
import classicImage from "@/assets/classic-cheesecake.jpg";
import chocolateImage from "@/assets/chocolate-cheesecake.jpg";
import strawberryImage from "@/assets/strawberry-cheesecake.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage, classicImage, chocolateImage, strawberryImage];
  
  const handleOrderClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfCd_-H5o5S5sGm82WStA_Ji7FH7fXbbtm6aaHaJwYjsCX4SA/viewform?pli=1', '_blank');
  };

  const handleMenuClick = () => {
    // Scroll to menu section or open menu modal
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with rotating images */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        {/* Full-size white gradient background */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-text-highlight)' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Artisan Crafted Since 2020
            </Badge>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Soléa
                <span className="block text-primary">Bakes</span>
              </h1>
              <p className="font-playfair text-2xl lg:text-3xl text-primary italic">
                Homemade Cheesecakes Made with Passion
              </p>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg font-inter leading-relaxed">
              Indulge in rich, creamy cheesecakes crafted with premium ingredients and 
              endless love. Every slice is a celebration of flavor and elegance.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-medium">Made with Love</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleOrderClick}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant hover:shadow-glow text-lg px-8 py-6 rounded-full font-inter font-medium"
              >
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleMenuClick}
                variant="outline"
                size="lg"
                className="group border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg px-8 py-6 rounded-full font-inter font-medium"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">View Menu</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Right side - Image showcase */}
          <div className="relative">
            {/* Main image card */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={images[currentImage]} 
                    alt="Featured Cheesecake"
                    className="w-full h-96 object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white px-3 py-1">
                      Featured
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-primary scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
