
import { useState, useEffect } from "react";

// Fetch all buying guides
export const useGuides = () => {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setGuides(sampleGuides);
      } catch (err) {
        console.error("Error fetching guides:", err);
        setError("Failed to load buying guides. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  return { guides, loading, error };
};

// Fetch a single guide by slug
export const useGuideBySlug = (slug) => {
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuide = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundGuide = sampleGuides.find(g => g.slug === slug);
        if (foundGuide) {
          setGuide(foundGuide);
        } else {
          setError("Buying guide not found.");
        }
      } catch (err) {
        console.error(`Error fetching guide ${slug}:`, err);
        setError("Failed to load buying guide. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuide();
  }, [slug]);

  return { guide, loading, error };
};

// Sample guide data
const sampleGuides = [
  {
    id: "1",
    slug: "best-noise-cancelling-headphones",
    title: "The Best Noise-Cancelling Headphones for Every Budget",
    excerpt: "Looking for peace and quiet in a noisy world? Our comprehensive guide will help you find the perfect noise-cancelling headphones for your needs and budget.",
    content: `<p>Noise-cancelling headphones have become essential for travelers, remote workers, and anyone seeking a moment of peace in noisy environments. This guide will walk you through everything you need to know before making your purchase.</p>
      <h2>How We Tested</h2>
      <p>We evaluated each pair of headphones based on noise cancellation effectiveness, sound quality, comfort for extended wear, battery life, and overall value. Our testing included airplane cabins, busy offices, and city streets to ensure real-world performance.</p>
      <h2>Top Premium Pick: Sony WH-1000XM5</h2>
      <p>The Sony WH-1000XM5 headphones represent the pinnacle of noise-cancelling technology. With dual processors controlling 8 microphones, they deliver unprecedented noise cancellation. The sound quality is excellent, with clear highs and rich, detailed bass.</p>
      <p>Battery life is impressive at up to 30 hours with ANC enabled, and the comfortable design makes them suitable for long listening sessions. The touch controls are intuitive, and the speak-to-chat feature automatically pauses your music when you start talking.</p>
      <h2>Best Value: Anker Soundcore Space Q45</h2>
      <p>For those seeking excellent noise cancellation without breaking the bank, the Anker Soundcore Space Q45 offers remarkable performance at half the price of premium models. With adaptive noise cancellation that adjusts to your environment and up to 50 hours of battery life, these headphones are perfect for budget-conscious buyers.</p>
      <h2>Best for Apple Users: AirPods Max</h2>
      <p>Apple's AirPods Max offer seamless integration with the Apple ecosystem, impressive noise cancellation, and exceptional sound quality. The transparency mode is among the most natural-sounding we've tested, and the build quality is outstanding. However, they come at a premium price and lack a power button or folding design.</p>
      <h2>Bottom Line</h2>
      <p>When choosing noise-cancelling headphones, consider your primary use case and budget. For the ultimate performance regardless of price, the Sony WH-1000XM5 is our top recommendation. Budget-conscious buyers will be very happy with the Anker Soundcore Space Q45, while Apple users may prefer the AirPods Max despite their higher price tag.</p>`,
    image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
    category: "audio",
    date: "November 15, 2023",
    author: "Alex Morgan"
  },
  {
    id: "2",
    slug: "smart-home-buying-guide",
    title: "Building Your Smart Home: A Beginner's Guide",
    excerpt: "Turn your house into a modern smart home with our comprehensive guide to smart devices, ecosystems, and setup tips.",
    content: `<p>Creating a smart home doesn't have to be complex or expensive. This guide will help you get started with the basics and then expand your system as your needs grow.</p>
      <h2>Choose Your Ecosystem</h2>
      <p>The first decision is which ecosystem to build around: Amazon Alexa, Google Home, or Apple HomeKit. Each has its strengths and weaknesses, so consider which devices you already own and which services you use regularly.</p>
      <h2>Start with Smart Speakers</h2>
      <p>A smart speaker is the perfect foundation for your smart home. The Amazon Echo (4th Gen) offers excellent sound quality and full Alexa capabilities, while the Google Nest Audio provides similar features for Google Home users. For Apple enthusiasts, the HomePod mini is compact but powerful.</p>
      <h2>Smart Lighting: The Easy First Step</h2>
      <p>Smart bulbs and light strips are an affordable way to add convenience and ambiance to your home. Philips Hue remains the gold standard but requires a hub, while brands like LIFX and Wyze offer hub-free alternatives at lower prices.</p>
      <h2>Security and Peace of Mind</h2>
      <p>Smart cameras, video doorbells, and smart locks add security and convenience. We recommend the Ring Video Doorbell for Alexa users, the Nest Doorbell for Google Home enthusiasts, and the Logitech Circle View for Apple HomeKit users.</p>
      <h2>Climate Control</h2>
      <p>Smart thermostats like the ecobee SmartThermostat and Google Nest Learning Thermostat can save energy while providing precise temperature control. Many models now include occupancy sensors to adjust heating and cooling based on whether you're home.</p>
      <h2>Bottom Line</h2>
      <p>Start small, focus on solving specific problems in your home, and expand gradually. Ensure your Wi-Fi network is robust enough to handle multiple devices, and consider privacy implications when choosing products. With thoughtful planning, your smart home can enhance your lifestyle while remaining secure and easy to use.</p>`,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "smart-home",
    date: "October 28, 2023",
    author: "Jamie Lewis"
  },
  {
    id: "3",
    slug: "best-4k-tvs-guide",
    title: "4K TVs: OLED vs QLED vs Mini-LED Explained",
    excerpt: "Confused by TV technology jargon? Our guide breaks down the differences between OLED, QLED, and Mini-LED to help you find your perfect 4K TV.",
    content: `<p>The TV market is filled with acronyms and marketing terms that can confuse even tech-savvy shoppers. This guide cuts through the jargon to help you understand what really matters when choosing a 4K TV.</p>
      <h2>OLED: The Contrast Champion</h2>
      <p>OLED (Organic Light Emitting Diode) TVs use self-emissive pixels that can turn completely off, resulting in perfect blacks and infinite contrast. They excel in dark rooms and offer wide viewing angles, making them ideal for movie night. However, they can't get as bright as LED competitors and may be susceptible to burn-in with static images (though this is increasingly rare with modern models).</p>
      <h2>QLED: Samsung's Bright Alternative</h2>
      <p>QLED (Quantum Dot LED) technology uses a quantum dot layer to enhance color and brightness in traditional LED displays. These TVs can get extremely bright, making them perfect for well-lit rooms. While they can't match OLED's perfect blacks, the latest models with mini-LED backlights come very close while avoiding burn-in concerns.</p>
      <h2>Mini-LED: The Best of Both Worlds?</h2>
      <p>Mini-LED technology shrinks the LED backlights to allow for more precise local dimming zones. This dramatically improves contrast compared to traditional LED TVs, approaching OLED quality while maintaining higher brightness. TCL pioneered this technology, but now most major manufacturers offer mini-LED models.</p>
      <h2>What About Refresh Rate and HDMI 2.1?</h2>
      <p>For gamers, a 120Hz refresh rate and HDMI 2.1 ports are essential to take advantage of next-gen consoles. Look for features like Variable Refresh Rate (VRR) and Auto Low Latency Mode (ALLM) for the best gaming experience.</p>
      <h2>Our Top Picks</h2>
      <p>For most viewers, the LG C3 OLED offers the best balance of picture quality, features, and value. If you have a bright living room, consider the Samsung QN90C Neo QLED. Budget-conscious shoppers should look at the TCL 6-Series, which offers mini-LED technology at remarkably affordable prices.</p>
      <h2>Bottom Line</h2>
      <p>There's no single "best" TV technology – the right choice depends on your viewing environment and personal preferences. OLED excels in dark rooms for movies and offers the widest viewing angles. QLED and Mini-LED perform better in bright rooms and have no burn-in risk. Visit a showroom if possible to compare technologies with your own eyes before making a decision.</p>`,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "electronics",
    date: "September 15, 2023",
    author: "Chris Johnson"
  },
  {
    id: "4",
    slug: "best-kitchen-gadgets-2023",
    title: "Essential Kitchen Gadgets That Are Actually Worth It",
    excerpt: "Skip the gimmicks and invest in these genuinely useful kitchen tools that will transform your cooking experience.",
    content: `<p>Kitchen stores are full of single-purpose gadgets that end up collecting dust. This guide focuses on versatile tools that earn their keep in your kitchen by saving time and improving results.</p>
      <h2>Instant Pot: The Versatile Time-Saver</h2>
      <p>The Instant Pot Duo Plus combines nine appliances in one: pressure cooker, slow cooker, rice cooker, steamer, yogurt maker, sauté pan, food warmer, and sterilizer. It reduces cooking time by up to 70% while preserving flavors and nutrients. The 6-quart model is ideal for most households, offering enough capacity without overwhelming counter space.</p>
      <h2>High-Quality Chef's Knife</h2>
      <p>Forget knife sets with specialized blades you'll rarely use. A single high-quality chef's knife will handle 90% of your cutting tasks. The Victorinox Fibrox Pro Chef's Knife offers professional performance at a reasonable price, while the Mac Professional Series Chef's Knife represents an investment-grade option for serious home cooks.</p>
      <h2>Immersion Blender</h2>
      <p>For soups, sauces, and smoothies, an immersion blender eliminates the need to transfer hot liquids to a traditional blender. The Breville Control Grip consistently tops tests for its ergonomic design and powerful motor, while the KitchenAid Hand Blender offers excellent performance at a lower price point.</p>
      <h2>Digital Food Scale</h2>
      <p>Precision makes a difference, especially in baking. The Escali Primo Digital Scale is accurate, easy to clean, and compact enough to store easily. Measuring ingredients by weight rather than volume results in more consistent cooking results.</p>
      <h2>Silicone Cooking Tools</h2>
      <p>Replace plastic utensils with heat-resistant silicone alternatives that won't scratch your cookware. The OXO Good Grips silicone tools are well-designed, durable, and dishwasher safe. Their high heat resistance (up to 600°F) makes them safe for all cooking methods.</p>
      <h2>Bottom Line</h2>
      <p>Focus on versatile tools that serve multiple purposes rather than single-use gadgets. Quality matters more than quantity when it comes to kitchen equipment. These essential items will simplify your cooking process while improving results, making them worthy investments for any home kitchen.</p>`,
    image: "https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    category: "kitchen",
    date: "August 10, 2023",
    author: "Sophie Wang"
  },
  {
    id: "5",
    slug: "best-earbuds-2023",
    title: "The Ultimate Guide to Wireless Earbuds",
    excerpt: "Find the perfect earbuds for your lifestyle with our comprehensive comparison of sound quality, fit, battery life, and special features.",
    content: `<p>Wireless earbuds have evolved dramatically in recent years, with options now available at every price point. This guide will help you navigate the key features to consider when choosing your perfect pair.</p>
      <h2>Apple AirPods Pro (2nd Gen): Best for iPhone Users</h2>
      <p>The second-generation AirPods Pro deliver vastly improved noise cancellation, better sound quality, and longer battery life than their predecessors. The seamless integration with Apple devices makes them the obvious choice for iPhone users, with features like spatial audio with dynamic head tracking and automatic switching between devices. The new touch controls on the stems are more intuitive, and the inclusion of four ear tip sizes helps ensure a secure fit.</p>
      <h2>Sony WF-1000XM4: Best Overall Sound Quality</h2>
      <p>Sony's flagship earbuds offer exceptional sound quality with rich, detailed audio across all frequencies. Their noise cancellation is among the best available, effectively blocking out both constant low-frequency noise and higher-pitched sounds. The unique foam ear tips provide excellent passive noise isolation and comfort. With 8 hours of battery life with ANC enabled and wireless charging support, they're perfect for audiophiles who don't want to compromise.</p>
      <h2>Samsung Galaxy Buds 2 Pro: Best for Android Users</h2>
      <p>For Android users, particularly those with Samsung phones, the Galaxy Buds 2 Pro offer the same kind of ecosystem integration that AirPods provide for Apple users. They support 24-bit audio (with compatible Samsung devices), feature excellent ANC, and have a compact, comfortable design. The touch controls are responsive, and voice call quality is notably improved over previous models.</p>
      <h2>Jabra Elite 4 Active: Best for Workouts</h2>
      <p>With an IP57 rating for water and dust resistance, the Jabra Elite 4 Active can handle intense workouts and even brief submersion. Their secure fit stays in place during high-impact activities, and the lack of ear wings or hooks makes them comfortable for extended wear. Sound quality is balanced and energetic, perfect for workout motivation, and the transparency mode lets you stay aware of your surroundings when running outdoors.</p>
      <h2>Nothing Ear (2): Best Value</h2>
      <p>The Nothing Ear (2) delivers features typically found in much more expensive earbuds, including effective ANC, wireless charging, and a transparent design that stands out from the crowd. Sound quality is excellent after some EQ adjustment in the companion app, and the battery life is respectable at around 6 hours with ANC off. They're proof that you don't need to spend over $200 for a premium wireless earbud experience.</p>
      <h2>Bottom Line</h2>
      <p>When choosing wireless earbuds, consider your primary use case and which devices you'll be connecting to. iPhone users will get the most seamless experience with AirPods Pro, while Android users should look to the Galaxy Buds 2 Pro or Sony's offerings. For fitness enthusiasts, durability and fit should be top priorities, making the Jabra Elite 4 Active an excellent choice. Those on a budget shouldn't feel pressured to overspend – options like the Nothing Ear (2) provide impressive performance at more accessible price points.</p>`,
    image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg",
    category: "audio",
    date: "July 12, 2023",
    author: "Alex Morgan"
  }
];
