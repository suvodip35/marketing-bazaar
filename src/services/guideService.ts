
import { useState, useEffect } from "react";

export interface Guide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const useGuides = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would be an API call
        // const response = await fetch('/api/guides');
        // const data = await response.json();
        // setGuides(data);
        
        // For now, simulate API call with sample data
        setTimeout(() => {
          setGuides(sampleGuides);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error('Error fetching guides:', err);
        setError('Failed to load guides. Please try again later.');
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  return { guides, loading, error };
};

// Get a specific guide by slug
export const useGuideBySlug = (slug: string) => {
  const [guide, setGuide] = useState<Guide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would be an API call
        // const response = await fetch(`/api/guides/${slug}`);
        // const data = await response.json();
        // setGuide(data);
        
        // For now, simulate API call with sample data
        setTimeout(() => {
          const foundGuide = sampleGuides.find(g => g.slug === slug) || null;
          setGuide(foundGuide);
          if (!foundGuide) {
            setError('Guide not found');
          }
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error('Error fetching guide:', err);
        setError('Failed to load guide. Please try again later.');
        setLoading(false);
      }
    };

    if (slug) {
      fetchGuide();
    }
  }, [slug]);

  return { guide, loading, error };
};

// Sample guide data
const sampleGuides: Guide[] = [
  {
    id: "1",
    title: "How to Choose the Best Wireless Headphones in 2023",
    slug: "best-wireless-headphones-guide",
    excerpt: "Find the perfect wireless headphones with our comprehensive buying guide covering sound quality, battery life, comfort, and more.",
    content: `
      <h2>What to Look for in Wireless Headphones</h2>
      <p>When shopping for wireless headphones, consider these key factors:</p>
      <ul>
        <li><strong>Sound Quality:</strong> Look for headphones with balanced sound profiles and good frequency response.</li>
        <li><strong>Noise Cancellation:</strong> Active Noise Cancellation (ANC) can significantly improve your listening experience.</li>
        <li><strong>Battery Life:</strong> For over-ear models, look for 20+ hours of playback time. For earbuds, 5-8 hours is good, with charging cases offering additional battery life.</li>
        <li><strong>Comfort and Fit:</strong> This is subjective but crucial for long listening sessions.</li>
        <li><strong>Connectivity:</strong> Most modern headphones use Bluetooth 5.0 or higher. Look for multipoint connection if you switch between devices.</li>
        <li><strong>Water/Sweat Resistance:</strong> Important for workout headphones. Look for an IPX4 rating or higher.</li>
      </ul>
      
      <h2>Top Recommendations</h2>
      <h3>Best Overall: Sony WH-1000XM5</h3>
      <p>The Sony WH-1000XM5 headphones offer industry-leading noise cancellation, exceptional sound quality, and excellent battery life of up to 30 hours.</p>
      
      <h3>Best for Apple Users: AirPods Pro</h3>
      <p>AirPods Pro offer seamless integration with Apple devices, good noise cancellation, and a comfortable fit for most users.</p>
      
      <h3>Best Budget Option: Anker Soundcore Life Q30</h3>
      <p>These headphones offer great value with active noise cancellation, 40-hour battery life, and customizable EQ settings via the companion app.</p>
    `,
    image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
    category: "audio",
    date: "June 15, 2023",
    author: "Sarah Johnson"
  },
  {
    id: "2",
    title: "Ultimate Smart TV Buying Guide: What You Need to Know",
    slug: "smart-tv-buying-guide",
    excerpt: "Navigate the complex world of smart TVs with our detailed guide covering resolution, display technology, smart features, and connectivity options.",
    content: `
      <h2>Understanding Display Technology</h2>
      <p>There are several display technologies available:</p>
      <ul>
        <li><strong>LED/LCD:</strong> The most common and affordable option.</li>
        <li><strong>QLED:</strong> Samsung's quantum dot technology offers better brightness and color performance than standard LED.</li>
        <li><strong>OLED:</strong> Offers perfect blacks, infinite contrast, and wide viewing angles, but at a higher price point.</li>
        <li><strong>Mini-LED:</strong> A newer technology with improved contrast over traditional LED.</li>
      </ul>
      
      <h2>Resolution Options</h2>
      <p>4K (3840 x 2160) is now standard, with 8K emerging at premium price points. For most viewers, 4K offers the best balance of quality and value.</p>
      
      <h2>Smart Features</h2>
      <p>Consider the operating system (Roku, Google TV, webOS, Tizen) based on user interface preferences and app availability.</p>
      
      <h2>Size Considerations</h2>
      <p>Measure your space and consider viewing distance. A general rule is to multiply your viewing distance (in feet) by 7.7 to get the recommended screen size (in inches).</p>
      
      <h2>Top Recommendations</h2>
      <h3>Best Overall: LG C2 OLED</h3>
      <p>Perfect blacks, excellent contrast, and gaming features make this a top choice for most users.</p>
      
      <h3>Best Value: TCL 6-Series</h3>
      <p>Offers mini-LED technology and excellent features at a more affordable price point.</p>
    `,
    image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg",
    category: "tvs",
    date: "July 3, 2023",
    author: "Michael Chen"
  },
  {
    id: "3",
    title: "How to Choose the Perfect Laptop for Your Needs",
    slug: "perfect-laptop-buying-guide",
    excerpt: "From processors to display quality, find out everything you need to know before purchasing your next laptop.",
    content: `
      <h2>Key Specifications to Consider</h2>
      <ul>
        <li><strong>Processor (CPU):</strong> Intel Core i5/i7 or AMD Ryzen 5/7 are good for most users. Content creators might want i9 or Ryzen 9.</li>
        <li><strong>RAM:</strong> 8GB minimum, 16GB recommended for future-proofing, 32GB for professional work.</li>
        <li><strong>Storage:</strong> SSD storage is essential - 256GB minimum, 512GB recommended.</li>
        <li><strong>Display:</strong> 1080p minimum, consider higher resolution for creative work. Look for good color accuracy if that matters to you.</li>
        <li><strong>Graphics:</strong> Integrated graphics work for most tasks; dedicated GPUs needed for gaming or creative work.</li>
        <li><strong>Battery Life:</strong> Look for 8+ hours for good portability.</li>
      </ul>
      
      <h2>Use Case Recommendations</h2>
      <h3>For Students:</h3>
      <p>Prioritize portability, battery life, and adequate performance. MacBook Air or Dell XPS 13 are excellent options.</p>
      
      <h3>For Professionals:</h3>
      <p>Focus on performance, build quality, and display. ThinkPad X1 Carbon or MacBook Pro offer excellent balance.</p>
      
      <h3>For Gamers:</h3>
      <p>Prioritize graphics capabilities, cooling, and display refresh rate. ASUS ROG or Lenovo Legion series are good options.</p>
    `,
    image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    category: "computers",
    date: "August 12, 2023",
    author: "David Williams"
  },
  {
    id: "4",
    title: "The Complete Guide to Buying a DSLR Camera",
    slug: "dslr-camera-buying-guide",
    excerpt: "Everything you need to know before investing in a DSLR camera, from sensor types to lens compatibility.",
    content: `
      <h2>Key Camera Features to Consider</h2>
      <ul>
        <li><strong>Sensor Size:</strong> Full-frame offers better low-light performance, while APS-C is more affordable.</li>
        <li><strong>Resolution:</strong> 20-24MP is sufficient for most users. Higher isn't always better.</li>
        <li><strong>ISO Range:</strong> Wider ranges perform better in varying light conditions.</li>
        <li><strong>Autofocus Points:</strong> More points generally means better focusing capability.</li>
        <li><strong>Burst Speed:</strong> Higher frames-per-second benefits action photography.</li>
        <li><strong>Video Capabilities:</strong> 4K is increasingly standard. Look for frame rate options if video is important.</li>
      </ul>
      
      <h2>Lens Considerations</h2>
      <p>Consider the lens ecosystem when choosing a brand. Remember that lenses are often a bigger investment than the camera body over time.</p>
      
      <h2>Top Recommendations</h2>
      <h3>For Beginners: Nikon D3500 or Canon EOS Rebel T8i</h3>
      <p>User-friendly interfaces with good automatic modes and room to grow.</p>
      
      <h3>For Enthusiasts: Canon EOS 90D or Nikon D7500</h3>
      <p>More advanced features, better build quality, and enhanced performance.</p>
      
      <h3>For Professionals: Sony A7 III or Canon EOS R6</h3>
      <p>Full-frame sensors, exceptional image quality, and professional-grade features.</p>
    `,
    image: "https://m.media-amazon.com/images/I/71EWRyQrKnL._AC_SL1500_.jpg",
    category: "cameras",
    date: "September 5, 2023",
    author: "Emily Parker"
  },
];
