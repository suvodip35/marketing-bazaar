
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6">About AffiliateHub</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                AffiliateHub is a trusted resource for product reviews, recommendations, and deals. 
                Our mission is to help consumers make informed purchasing decisions by providing 
                honest, unbiased information about the products they're interested in.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">Our Approach</h2>
              <p className="mb-4">
                We thoroughly research and test products across various categories to provide 
                accurate and helpful information. Our recommendations are based on careful 
                analysis, expert opinion, and real user experiences.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">Affiliate Disclosure</h2>
              <p className="mb-4">
                AffiliateHub is a participant in the Amazon Services LLC Associates Program, 
                an affiliate advertising program designed to provide a means for sites to earn 
                advertising fees by advertising and linking to Amazon.com. We may earn a commission 
                when you purchase products through our links.
              </p>
              <p className="mb-4">
                While we do earn commissions on qualifying purchases, this does not influence our 
                recommendations. We prioritize accuracy and honesty in our reviews, and we only 
                recommend products we believe are truly worthwhile.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">Our Team</h2>
              <p className="mb-4">
                Our team consists of experienced product testers, researchers, and writers who are 
                passionate about helping consumers find the best products for their needs. We 
                continuously update our content to ensure it remains relevant and accurate.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                Have questions, comments, or suggestions? We'd love to hear from you! Visit our 
                <a href="/contact" className="text-primary hover:underline"> Contact page</a> to get in touch.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
