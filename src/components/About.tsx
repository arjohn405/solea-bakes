import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Clock, Star, Leaf, Coffee, Sparkles } from "lucide-react";
import { useState } from "react";
import classicCheesecake from "@/assets/classic-cheesecake.jpg";
import chocolateCheesecake from "@/assets/chocolate-cheesecake.jpg";
import strawberryCheesecake from "@/assets/strawberry-cheesecake.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const storySections = [
    {
      title: "Our Beginning",
      content: "Founded in 2020 with a simple dream: to create the most delicious cheesecakes that bring joy to every celebration. What started as a home kitchen experiment has grown into a beloved local bakery.",
      icon: <Heart className="w-8 h-8 text-primary" />,
      image: classicCheesecake
    },
    {
      title: "Our Craft",
      content: "We blend traditional European techniques with modern innovation, using only the finest ingredients. Each cheesecake is handcrafted with meticulous attention to detail and endless passion.",
      icon: <Award className="w-8 h-8 text-primary" />,
      image: chocolateCheesecake
    },
    {
      title: "Our Community",
      content: "From intimate family gatherings to grand celebrations, we've been honored to be part of countless special moments. Our customers are the heart of everything we do.",
      icon: <Users className="w-8 h-8 text-primary" />,
      image: strawberryCheesecake
    }
  ];

  const values = [
    {
      title: "Premium Quality",
      description: "Only the finest ingredients make it into our kitchen",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Fresh Daily",
      description: "Every cheesecake is baked fresh to order",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Natural Ingredients",
      description: "No artificial preservatives or additives",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Artisan Crafted",
      description: "Handmade with traditional techniques",
      icon: <Coffee className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Cheesecake Varieties" },
    { number: "4", label: "Years of Excellence" },
    { number: "100%", label: "Made with Love" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">
            Crafting Sweet Memories
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground leading-relaxed font-inter max-w-3xl mx-auto">
            Every cheesecake tells a story of dedication, artistry, and the simple joy of creating something beautiful for the people you love.
          </p>
        </div>

        {/* Story Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {storySections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              {storySections[activeTab].image ? (
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <img 
                      src={storySections[activeTab].image} 
                      alt={storySections[activeTab].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      {storySections[activeTab].icon}
                      <h3 className="font-playfair text-2xl font-bold text-foreground">
                        {storySections[activeTab].title}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                      {storySections[activeTab].content}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      {storySections[activeTab].icon}
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                        {storySections[activeTab].title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                        {storySections[activeTab].content}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">
            What We Stand For
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
