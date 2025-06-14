import { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Calendar,
  BookOpen,
  Heart,
} from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";

// Lazy load 3D components for better performance
const Hero3D = lazy(() => import("@/components/Hero3D"));
const ParticlesBackground = lazy(
  () => import("@/components/ParticlesBackground"),
);

const Index = () => {
  const { data: portfolioData, loading, error } = usePortfolioData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !portfolioData) {
    return (
      <ErrorMessage
        message={error || "Failed to load portfolio data"}
        onRetry={() => window.location.reload()}
      />
    );
  }

  const { personal, experience, education, skills, projects, interests } =
    portfolioData;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Particles Background */}
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-in-from-left">
              <div className="space-y-4">
                <p className="text-purple-400 text-lg font-medium">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {personal.name}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                  {personal.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  {personal.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href={`https://github.com/${personal.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={`https://linkedin.com/in/${personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* 3D Hero */}
            <div className="h-96 lg:h-[500px] animate-slide-in-from-right">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
                  </div>
                }
              >
                <Hero3D />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-from-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Full-Stack Developer with expertise in the
                  MERN stack. I love creating beautiful, functional web
                  applications that solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently working at{" "}
                  <span className="text-purple-400 font-semibold">
                    Bosc Tech Labs
                  </span>{" "}
                  with over 2.5 years of experience in building scalable web
                  solutions. I'm always eager to learn new technologies and take
                  on challenging projects.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <span>{personal.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <span>{personal.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Heart className="h-4 w-4 text-purple-400" />
                    <span>Open to work</span>
                  </div>
                </div>
              </div>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 animate-slide-in-from-right">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Experience</span>
                      <span className="text-purple-400 font-medium">
                        2+ Years
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Projects Completed</span>
                      <span className="text-purple-400 font-medium">
                        {projects.length}+
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Current Role</span>
                      <span className="text-purple-400 font-medium">
                        Full Stack Dev
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Specialization</span>
                      <span className="text-purple-400 font-medium">
                        MERN Stack
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.technical.map((skill, index) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    index={index}
                    category="technical"
                  />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.soft.map((skill, index) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    index={index}
                    category="soft"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <BookOpen className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-400">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's build something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <Linkedin className="h-8 w-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    LinkedIn
                  </h3>
                  <a
                    href={`https://linkedin.com/in/${personal.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Connect with me
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <Github className="h-8 w-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    GitHub
                  </h3>
                  <a
                    href={`https://github.com/${personal.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    View my code
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
              asChild
            >
              <a href={`mailto:${personal.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 {personal.name}. Built with React, Three.js & TailwindCSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
