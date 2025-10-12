# Gallery Management Documentation

## Overview
This guide explains how to add new cheesecakes to the gallery system. The gallery is built with a data-driven approach, making it easy to add new items without modifying the UI components.

## File Structure
```
src/
├── assets/                    # Image files
│   ├── classic-cheesecake.jpg
│   ├── chocolate-cheesecake.jpg
│   ├── strawberry-cheesecake.jpg
│   └── hero-cheesecake.jpg
├── data/
│   └── cheesecakes.ts        # Main data file
├── components/
│   └── FeaturedCheesecakes.tsx # Home page (shows 3 items)
└── pages/
    └── Gallery.tsx           # Gallery page (shows all items)
```

## Step-by-Step Guide

### Step 1: Add Image Files
1. **Location**: Place your cheesecake images in `/src/assets/`
2. **Format**: Use `.jpg`, `.jpeg`, or `.png` formats
3. **Naming**: Use descriptive, kebab-case names
   - ✅ `vanilla-bean-cheesecake.jpg`
   - ✅ `lemon-blueberry-cheesecake.jpg`
   - ❌ `Vanilla Bean Cheesecake.jpg`
   - ❌ `lemon_blueberry.jpg`

### Step 2: Import Images
Add import statements at the top of `/src/data/cheesecakes.ts`:

```typescript
import classicImage from "@/assets/classic-cheesecake.jpg";
import chocolateImage from "@/assets/chocolate-cheesecake.jpg";
import strawberryImage from "@/assets/strawberry-cheesecake.jpg";
import heroImage from "@/assets/hero-cheesecake.jpg";
// Add your new imports here
import vanillaBeanImage from "@/assets/vanilla-bean-cheesecake.jpg";
import lemonBlueberryImage from "@/assets/lemon-blueberry-cheesecake.jpg";
```

### Step 3: Add Cheesecake Data
Add new cheesecake objects to the `cheesecakes` array in `/src/data/cheesecakes.ts`:

```typescript
{
  id: "unique-identifier",           // Required: URL-friendly identifier
  name: "Cheesecake Name",           // Required: Display name
  description: "Brief description",  // Required: Gallery card description (1-2 sentences)
  fullDescription: "Long description", // Required: Detail page description (2-3 sentences)
  image: yourImportedImage,          // Required: Imported image reference
  price: "$XX",                      // Required: Price with $ symbol
  ingredients: [                     // Required: Array of ingredients
    "Premium cream cheese",
    "Fresh fruit",
    "Graham cracker crust"
  ],
  servings: "8-10 slices",          // Required: Serving size
  features: [                       // Required: Array of key features
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

## Complete Example

Here's a complete example of adding a new cheesecake:

### 1. Add Image
Place `lemon-blueberry-cheesecake.jpg` in `/src/assets/`

### 2. Import Image
```typescript
// In /src/data/cheesecakes.ts
import lemonBlueberryImage from "@/assets/lemon-blueberry-cheesecake.jpg";
```

### 3. Add Data Object
```typescript
// Add to the cheesecakes array
{
  id: "lemon-blueberry",
  name: "Lemon Blueberry",
  description: "Tangy lemon cheesecake swirled with fresh blueberry compote",
  fullDescription: "Our Lemon Blueberry cheesecake combines the bright, zesty flavor of fresh lemons with the sweet-tart taste of hand-picked blueberries. The creamy lemon filling is swirled with a homemade blueberry compote, creating a beautiful marbled effect and a perfect balance of flavors.",
  image: lemonBlueberryImage,
  price: "$49",
  ingredients: [
    "Premium cream cheese",
    "Fresh lemons",
    "Blueberry compote",
    "Graham cracker crust",
    "Lemon zest",
    "Organic sugar"
  ],
  servings: "8-10 slices",
  features: [
    "Fresh lemon flavor",
    "Swirled blueberry compote",
    "Beautiful marbled appearance",
    "Perfect for spring & summer"
  ]
}
```

## Data Field Requirements

### Required Fields
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | string | URL-friendly identifier | `"lemon-blueberry"` |
| `name` | string | Display name | `"Lemon Blueberry"` |
| `description` | string | Brief description (1-2 sentences) | `"Tangy lemon cheesecake..."` |
| `fullDescription` | string | Detailed description (2-3 sentences) | `"Our Lemon Blueberry..."` |
| `image` | string | Imported image reference | `lemonBlueberryImage` |
| `price` | string | Price with $ symbol | `"$49"` |
| `ingredients` | string[] | Array of ingredients | `["Premium cream cheese", ...]` |
| `servings` | string | Serving size | `"8-10 slices"` |
| `features` | string[] | Array of key features | `["Fresh lemon flavor", ...]` |

### Field Guidelines

#### ID Guidelines
- Use kebab-case (lowercase with hyphens)
- Be descriptive but concise
- Must be unique
- Examples: `"vanilla-bean"`, `"chocolate-mint"`, `"strawberry-swirl"`

#### Description Guidelines
- **Gallery description**: 1-2 sentences, focus on key appeal
- **Full description**: 2-3 sentences, more detailed and engaging
- Use descriptive, appetizing language
- Highlight unique features or ingredients

#### Price Guidelines
- Always include $ symbol
- Use whole numbers when possible
- Examples: `"$45"`, `"$49"`, `"$52"`

#### Ingredients Guidelines
- List 4-6 key ingredients
- Use descriptive terms (e.g., "Premium cream cheese" not just "cream cheese")
- Order from most important to least important
- Be specific about special ingredients

#### Features Guidelines
- List 3-4 key selling points
- Focus on what makes this cheesecake special
- Use action-oriented language
- Examples: "Made with real vanilla beans", "Perfect for celebrations"

## Display Behavior

### Home Page (FeaturedCheesecakes.tsx)
- Shows only the **first 3 cheesecakes** from the array
- Order matters - first 3 items appear on home page
- Uses 3-column grid layout
- Includes "View Full Gallery" button

### Gallery Page (Gallery.tsx)
- Shows **all cheesecakes** from the array
- Uses responsive grid (1-3 columns based on screen size)
- Each item is clickable and navigates to detail page

## Best Practices

### Image Optimization
- **Recommended size**: 800x800px or larger (square aspect ratio)
- **File size**: Keep under 500KB for web performance
- **Format**: Use JPEG for photos, PNG for graphics with transparency
- **Quality**: High quality, well-lit photos work best

### Content Writing
- Use appetizing, descriptive language
- Highlight unique selling points
- Keep descriptions concise but engaging
- Use consistent tone and style

### Organization
- Add new cheesecakes at the end of the array
- Consider seasonal or special items
- Group similar flavors together if desired
- Update this documentation when adding new fields

## Troubleshooting

### Common Issues

#### Image Not Displaying
- Check import path is correct
- Ensure image file exists in `/src/assets/`
- Verify image file extension matches import

#### TypeScript Errors
- Ensure all required fields are present
- Check that field types match the interface
- Verify imported image is properly referenced

#### Layout Issues
- Home page will always show first 3 items
- Gallery page shows all items in responsive grid
- Check that descriptions aren't too long for card layout

### Testing
1. Add new cheesecake to data file
2. Check home page shows correct 3 items
3. Check gallery page shows all items including new one
4. Click on new item to verify detail page works
5. Test on mobile and desktop layouts

## Advanced Customization

### Adding New Fields
If you need to add new fields to cheesecakes:

1. Update the `Cheesecake` interface in `/src/data/cheesecakes.ts`
2. Add the field to all existing cheesecake objects
3. Update the UI components to display the new field
4. Update this documentation

### Reordering Items
To change which 3 items appear on the home page:
1. Reorder items in the `cheesecakes` array
2. First 3 items will appear on home page
3. All items will appear in gallery in the same order

### Seasonal Items
Consider creating seasonal collections:
- Add seasonal items to the array
- Use descriptive names and descriptions
- Consider temporary items for holidays

## Support
For questions or issues with adding items to the gallery, refer to this documentation or check the existing cheesecake data for examples.
