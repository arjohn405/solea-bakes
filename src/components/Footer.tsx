import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Soléa Bakes</h3>
            <p className="text-secondary-foreground/80 font-inter">
              Crafting moments of pure indulgence, one cheesecake at a time.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold">Contact</h4>
            <div className="space-y-3 font-inter text-secondary-foreground/80">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@soleabakes.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4" />
                <span>Your City, State</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold">Hours</h4>
            <div className="space-y-2 font-inter text-secondary-foreground/80">
              <p>Orders by appointment</p>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/70 font-inter">
            © {new Date().getFullYear()} Soléa Bakes. Made with love and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
