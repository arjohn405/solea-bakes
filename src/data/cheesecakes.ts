import classicImage from "@/assets/classic-cheesecake.jpg";
import chocolateImage from "@/assets/chocolate-cheesecake.jpg";
import strawberryImage from "@/assets/strawberry-cheesecake.jpg";
import heroImage from "@/assets/hero-cheesecake.jpg";

export interface Cheesecake {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  price: string;
  ingredients: string[];
  servings: string;
  features: string[];
}

export const cheesecakes: Cheesecake[] = [
  {
    id: "classic-original",
    name: "Classic Original",
    description: "Our signature New York-style cheesecake with a buttery graham cracker crust",
    fullDescription: "Experience the timeless elegance of our Classic Original cheesecake. Made with premium cream cheese, farm-fresh eggs, and real vanilla extract, this New York-style masterpiece features a dense, creamy texture that melts in your mouth. The buttery graham cracker crust provides the perfect foundation for this iconic dessert.",
    image: classicImage,
    price: "$45",
    ingredients: [
      "Premium cream cheese",
      "Farm-fresh eggs",
      "Pure vanilla extract",
      "Graham cracker crust",
      "Real butter",
      "Organic sugar"
    ],
    servings: "8-10 slices",
    features: [
      "New York-style texture",
      "Made with premium ingredients",
      "Baked fresh to order",
      "Perfect for any occasion"
    ]
  },
  {
    id: "chocolate-decadence",
    name: "Chocolate Decadence",
    description: "Rich chocolate cheesecake topped with silky ganache and chocolate shavings",
    fullDescription: "Indulge in pure chocolate bliss with our Chocolate Decadence. This luxurious creation combines velvety chocolate cheesecake with a dark chocolate ganache topping and delicate chocolate shavings. Made with premium Belgian chocolate and rich cocoa, it's a chocolate lover's dream come true.",
    image: chocolateImage,
    price: "$50",
    ingredients: [
      "Belgian dark chocolate",
      "Premium cream cheese",
      "Dutch-process cocoa",
      "Chocolate cookie crust",
      "Heavy cream",
      "Chocolate ganache"
    ],
    servings: "8-10 slices",
    features: [
      "Made with Belgian chocolate",
      "Rich chocolate ganache topping",
      "Chocolate cookie crust",
      "Perfect for chocolate lovers"
    ]
  },
  {
    id: "strawberry-bliss",
    name: "Strawberry Bliss",
    description: "Creamy cheesecake crowned with fresh glazed strawberries",
    fullDescription: "Our Strawberry Bliss is a celebration of fresh, vibrant flavors. Featuring our signature creamy cheesecake base topped with hand-selected fresh strawberries in a glossy glaze, this dessert is as stunning to look at as it is delicious to eat. Each strawberry is carefully arranged for maximum visual appeal.",
    image: strawberryImage,
    price: "$48",
    ingredients: [
      "Premium cream cheese",
      "Fresh strawberries",
      "Homemade strawberry glaze",
      "Graham cracker crust",
      "Pure vanilla",
      "Organic sugar"
    ],
    servings: "8-10 slices",
    features: [
      "Topped with fresh strawberries",
      "Homemade strawberry glaze",
      "Beautiful presentation",
      "Perfect for spring & summer"
    ]
  },
  {
    id: "vanilla-dream",
    name: "Vanilla Dream",
    description: "Elegant vanilla bean cheesecake with a delicate crumb topping",
    fullDescription: "Our Vanilla Dream is a sophisticated take on the classic cheesecake. Made with real Madagascar vanilla beans and a hint of bourbon, this elegant dessert features a delicate crumb topping that adds the perfect textural contrast. It's simplicity at its finest.",
    image: heroImage,
    price: "$46",
    ingredients: [
      "Madagascar vanilla beans",
      "Premium cream cheese",
      "Bourbon vanilla extract",
      "Graham cracker crust",
      "Crumb topping",
      "Organic sugar"
    ],
    servings: "8-10 slices",
    features: [
      "Real vanilla bean flavor",
      "Delicate crumb topping",
      "Elegant presentation",
      "Perfect for any occasion"
    ]
  }
];
