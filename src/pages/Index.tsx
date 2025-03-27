
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/ui/HeroSection";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import CategorySection from "@/components/ui/CategorySection";
import DealsSection from "@/components/ui/DealsSection";
import TrustSection from "@/components/ui/TrustSection";
import RecentReviews from "@/components/ui/RecentReviews";
import NewsletterSection from "@/components/ui/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />
        <DealsSection />
        <TrustSection />
        <RecentReviews />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
