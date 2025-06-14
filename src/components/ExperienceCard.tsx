import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { Experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <Card
      className={cn(
        "group bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300",
        "animate-slide-in-from-right",
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {experience.title}
            </h3>
            <h4 className="text-lg text-purple-400 font-medium mb-2">
              {experience.company}
            </h4>
          </div>
          <Badge
            variant="outline"
            className="border-purple-400/50 text-purple-300"
          >
            {experience.type}
          </Badge>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        <ul className="space-y-2 text-gray-300">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-purple-400 mr-2 mt-1">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
