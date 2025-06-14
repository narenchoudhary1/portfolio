import { useState } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import Navigation from "@/components/Navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const { data: portfolioData, loading, error } = usePortfolioData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !portfolioData) {
    return (
      <ErrorMessage
        message={error || "Failed to load contact data"}
        onRetry={() => window.location.reload()}
      />
    );
  }

  const { personal } = portfolioData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || "Contact from Portfolio",
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                Get In Touch
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl">
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's discuss how we can work together.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Contact Information
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-purple-400 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Email</h3>
                          <a
                            href={`mailto:${personal.email}`}
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                          >
                            {personal.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-purple-400 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Phone</h3>
                          <a
                            href={`tel:${personal.phone}`}
                            className="text-gray-400 hover:text-purple-400 transition-colors"
                          >
                            {personal.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-purple-400 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Location</h3>
                          <p className="text-gray-400">{personal.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Follow Me
                    </h2>

                    <div className="space-y-4">
                      <a
                        href={`https://github.com/${personal.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <Github className="h-6 w-6 text-gray-400 group-hover:text-white" />
                        <div>
                          <h3 className="text-white font-medium">GitHub</h3>
                          <p className="text-gray-400 group-hover:text-gray-300">
                            View my repositories
                          </p>
                        </div>
                      </a>

                      <a
                        href={`https://linkedin.com/in/${personal.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      >
                        <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white" />
                        <div>
                          <h3 className="text-white font-medium">LinkedIn</h3>
                          <p className="text-gray-400 group-hover:text-gray-300">
                            Connect professionally
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-400/30">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Let's Build Something Amazing
                    </h3>
                    <p className="text-gray-300 mb-6">
                      I'm currently available for freelance work and open to
                      discussing new opportunities.
                    </p>
                    <Button
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                      asChild
                    >
                      <a
                        href={`mailto:${personal.email}?subject=Let's%20work%20together`}
                      >
                        Start a Conversation
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
