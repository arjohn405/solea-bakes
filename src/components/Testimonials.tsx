import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "Absolutely divine! The classic cheesecake melted in my mouth. Perfect balance of creamy and sweet. Will definitely order again for special occasions!",
    rating: 5,
    image: "SJ"
  },
  {
    name: "Michael Chen",
    review: "The chocolate cheesecake was a showstopper at our anniversary dinner. Rich, decadent, and beautifully presented. Soléa Bakes exceeded all expectations!",
    rating: 5,
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    review: "I'm obsessed with the strawberry cheesecake! Fresh berries, creamy filling, and that perfect crust. This is what homemade baking should taste like.",
    rating: 5,
    image: "ER"
  },
  {
    name: "David Thompson",
    review: "Ordered for my wife's birthday and she was thrilled! The attention to detail and quality of ingredients really shows. Thank you for making her day special!",
    rating: 5,
    image: "DT"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Don't just take our word for it—hear from our delighted customers who've 
            experienced the magic of Soléa Bakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-playfair font-bold text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  "{testimonial.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
