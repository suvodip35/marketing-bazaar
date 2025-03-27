
import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Guide } from "@/services/guideService";

interface GuideCardProps {
  guide: Guide;
}

export const GuideCard = ({ guide }: GuideCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/guides/${guide.slug}`}>
        <div className="aspect-video overflow-hidden">
          <img 
            src={guide.image} 
            alt={guide.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary" className="capitalize">{guide.category}</Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{guide.date}</span>
            </div>
          </div>
          <CardTitle className="text-xl line-clamp-2">{guide.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3">{guide.excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  );
};
