
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useGuideBySlug } from "@/services/guideService";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const GuideDetail = () => {
  const { slug } = useParams();
  const { guide, loading, error } = useGuideBySlug(slug || "");

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-2/3 mb-4" />
            <div className="flex items-center mb-6">
              <Skeleton className="h-4 w-24 mr-6" />
              <Skeleton className="h-4 w-48" />
            </div>
            <Skeleton className="h-64 w-full mb-6" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !guide) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
              <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
              <p className="text-gray-600 mb-6">{error || "The requested guide could not be found."}</p>
              <Button asChild>
                <Link to="/guides">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Guides
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/guides" className="hover:text-primary">Guides</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{guide.title}</span>
            </div>
          </div>
          
          <article className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-12">
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <Badge variant="secondary" className="capitalize mr-4">{guide.category}</Badge>
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{guide.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-3 w-3 mr-1" />
                  <span>{guide.author}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{guide.excerpt}</p>
              
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
            
            <div className="mt-12 pt-6 border-t">
              <Button asChild variant="outline">
                <Link to="/guides">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Guides
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideDetail;
