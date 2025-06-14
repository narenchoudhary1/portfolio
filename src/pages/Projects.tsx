import { portfolioData } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const { projects } = portfolioData;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-gray-400 hover:text-white mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                All Projects
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl">
              A comprehensive collection of my work showcasing various
              technologies and problem-solving approaches.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
