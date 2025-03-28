
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useGuideDetail } from "@/services/guideService";

const GuideDetail = () => {
  const { slug } = useParams();
  const { guide, loading, error } = useGuideDetail(slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="h-64 bg-gray-200 rounded mb-8"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 p-4 bg-red-50 rounded-md">
              {error}
            </div>
          ) : guide ? (
            <article className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span className="mr-4">{guide.date}</span>
                <span className="capitalize">{guide.category}</span>
              </div>
              
              <img 
                src={guide.image} 
                alt={guide.title} 
                className="w-full h-auto rounded-lg mb-8 max-h-[400px] object-cover"
              />
              
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: guide.content }} />
            </article>
          ) : (
            <div className="text-center py-12">
              Guide not found
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideDetail;
