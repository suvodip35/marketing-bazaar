
import { useState, useEffect } from "react";

export const guides = [
  {
    id: "1",
    slug: "best-gaming-laptops-2023",
    title: "The Best Gaming Laptops of 2023",
    excerpt: "Find the perfect gaming laptop for every budget with our comprehensive guide to the top performers of 2023.",
    content: "<p>Gaming laptops have come a long way in recent years, offering desktop-level performance in portable packages. In this guide, we break down the best options for every budget and need.</p><h2>High-End Picks</h2><p>For those with no budget constraints, the ASUS ROG Zephyrus G14 offers unmatched performance with the latest RTX GPUs and AMD processors.</p><h2>Mid-Range Options</h2><p>The Lenovo Legion 5 strikes an excellent balance between price and performance, offering great thermal management and a robust build quality.</p><h2>Budget Friendly</h2><p>The Acer Nitro 5 continues to be our go-to recommendation for gamers on a tight budget, delivering solid 1080p gaming performance without breaking the bank.</p>",
    image: "https://images.unsplash.com/photo-1603481546238-487240723ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "tech",
    date: "June 15, 2023"
  },
  {
    id: "2",
    slug: "kitchen-gadgets-worth-buying",
    title: "10 Kitchen Gadgets Actually Worth Buying",
    excerpt: "Skip the gimmicks and invest in these kitchen tools that will genuinely improve your cooking experience and save you time.",
    content: "<p>The kitchen gadget market is flooded with unnecessary items, but some tools truly are worth the investment. Here are our top picks that actually deserve a spot in your kitchen.</p><h2>Must-Have Food Processors</h2><p>A good food processor like the Cuisinart Custom 14-Cup can revolutionize your meal prep routine, handling everything from chopping vegetables to making homemade nut butters.</p><h2>Instant Pot Multi-Cookers</h2><p>The versatility of the Instant Pot Duo makes it worth every penny, functioning as a pressure cooker, slow cooker, rice cooker, and more in one compact appliance.</p><h2>Quality Chef's Knives</h2><p>Nothing compares to a high-quality chef's knife. The Victorinox Fibrox Pro is our top recommendation for most home cooks, offering professional-level performance at a reasonable price.</p>",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "kitchen",
    date: "May 22, 2023"
  },
  {
    id: "3",
    slug: "home-office-essentials",
    title: "Essential Equipment for Your Home Office Setup",
    excerpt: "Create a productive and comfortable work environment with these carefully selected home office essentials.",
    content: "<p>With remote work becoming more common, investing in a proper home office setup is crucial for productivity and well-being. Here's what you should consider.</p><h2>Ergonomic Office Chairs</h2><p>A quality chair is perhaps the most important investment. The Herman Miller Aeron remains the gold standard, but the Steelcase Series 1 offers excellent ergonomics at a more accessible price point.</p><h2>Adjustable Standing Desks</h2><p>The Fully Jarvis Standing Desk allows you to alternate between sitting and standing throughout the day, reducing the health risks associated with prolonged sitting.</p><h2>Proper Lighting Solutions</h2><p>The BenQ ScreenBar is our top recommendation for desk lighting, providing optimal illumination without causing glare on your monitor.</p>",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "office",
    date: "April 10, 2023"
  },
  {
    id: "4",
    slug: "fitness-equipment-small-spaces",
    title: "Best Fitness Equipment for Small Spaces",
    excerpt: "Limited space doesn't mean limited fitness options. Discover space-efficient equipment that delivers results without taking over your home.",
    content: "<p>You don't need a dedicated home gym to stay fit. These compact pieces of equipment deliver effective workouts even in the smallest apartments.</p><h2>Adjustable Dumbbells</h2><p>The Bowflex SelectTech 552 adjustable dumbbells replace an entire rack of weights while taking up minimal space, making them perfect for apartment dwellers.</p><h2>Resistance Bands</h2><p>A complete set of resistance bands can replicate most gym machines for strength training. The Whatafit Resistance Bands Set includes everything you need for a full-body workout.</p><h2>Foldable Cardio Equipment</h2><p>The Echelon EX-15 Smart Connect Fitness Bike offers an immersive cycling experience but can be easily moved and stored when not in use, making it ideal for small living spaces.</p>",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "fitness",
    date: "March 5, 2023"
  },
  {
    id: "5",
    slug: "smart-home-beginners-guide",
    title: "Smart Home for Beginners: Where to Start",
    excerpt: "Navigate the complex world of smart home technology with our straightforward guide to the essential devices worth investing in.",
    content: "<p>Building a smart home can be overwhelming with so many options available. This guide helps beginners identify the most useful smart devices to start with.</p><h2>Smart Speakers and Displays</h2><p>The Amazon Echo (4th Gen) or Google Nest Hub serve as excellent command centers for your smart home, offering voice control and integration with numerous other devices.</p><h2>Smart Lighting Systems</h2><p>Philips Hue remains the most versatile and reliable smart lighting system, with options ranging from simple white bulbs to color-changing light strips for complete ambiance control.</p><h2>Smart Thermostats</h2><p>The Ecobee SmartThermostat with Voice Control not only helps reduce energy costs but learns your preferences over time for optimal comfort and efficiency.</p>",
    image: "https://images.unsplash.com/photo-1558002038-27a7d64c7e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "tech",
    date: "February 18, 2023"
  },
  {
    id: "6",
    slug: "best-air-purifiers-comparison",
    title: "Breathe Easier: Comparing the Best Air Purifiers",
    excerpt: "Clear the air with our comprehensive comparison of the most effective air purifiers for allergies, smoke, and everyday pollution.",
    content: "<p>With air quality concerns on the rise, investing in a good air purifier has become essential for many households. Here's how the top models compare.</p><h2>Best Overall: Coway AP-1512HH Mighty</h2><p>This compact yet powerful purifier consistently outperforms competitors in removing airborne particles, operates quietly, and features low maintenance costs over time.</p><h2>Best for Allergies: Blueair Blue Pure 211+</h2><p>Particularly effective at capturing pollen, pet dander, and dust mites, this model is ideal for allergy sufferers and covers spaces up to 540 square feet.</p><h2>Best for Smoke: IQAir HealthPro Plus</h2><p>Though expensive, nothing beats the IQAir for eliminating smoke particles and VOCs, making it worth the investment for those in wildfire-prone areas or households with smokers.</p>",
    image: "https://images.unsplash.com/photo-1605490500023-3651e4c8cd5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "home",
    date: "January 9, 2023"
  }
];

export function useGuides() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { guides, loading, error };
}

export function useGuideDetail(slug) {
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const foundGuide = guides.find(g => g.slug === slug);
      if (foundGuide) {
        setGuide(foundGuide);
      } else {
        setError("Guide not found");
      }
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  return { guide, loading, error };
}
