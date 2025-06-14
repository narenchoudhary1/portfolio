import { useState, useEffect } from "react";

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
  bio: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
}

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  featured: boolean;
  timeline?: string;
  teamSize?: string;
  highlights?: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: PortfolioProject[];
  interests: string[];
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data/portfolio.json");

        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio data: ${response.status}`);
        }

        const portfolioData: PortfolioData = await response.json();
        setData(portfolioData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load portfolio data";
        setError(errorMessage);
        console.error("Error loading portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return { data, loading, error };
}

// Export types for backward compatibility
export type {
  PortfolioProject as PortfolioProjectType,
  Experience as ExperienceType,
};
