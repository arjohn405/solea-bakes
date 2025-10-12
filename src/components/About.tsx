const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed font-inter">
            At Soléa Bakes, every cheesecake tells a story of dedication and artistry. 
            Founded with a passion for creating unforgettable dessert experiences, we blend 
            traditional techniques with innovative flavors to craft cheesecakes that are 
            as beautiful as they are delicious.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-inter">
            From our signature creamy texture to our carefully selected toppings, 
            each creation is a testament to quality and care. We believe that every 
            celebration deserves something special—something made with heart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
