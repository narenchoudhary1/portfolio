import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock, Users } from "lucide-react";
import { PortfolioProject } from "@/hooks/usePortfolioData";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105",
        "animate-slide-in-from-left",
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                Featured
              </Badge>
            )}
          </div>

          <div className="flex space-x-2">
            {project.link && project.link !== "#" && (
              <Button
                size="sm"
                variant="ghost"
                asChild
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.github && project.github !== "#" && (
              <Button
                size="sm"
                variant="ghost"
                asChild
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Project metadata */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
          {project.timeline && (
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{project.timeline}</span>
            </div>
          )}
          {project.teamSize && (
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{project.teamSize}</span>
            </div>
          )}
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">
              Key Features:
            </h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-xs bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
