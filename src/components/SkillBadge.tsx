import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  index: number;
  category: "technical" | "soft";
}

export default function SkillBadge({
  skill,
  index,
  category,
}: SkillBadgeProps) {
  return (
    <Badge
      className={cn(
        "px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default",
        "animate-scale-in",
        category === "technical"
          ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-400/30 hover:border-purple-400/60"
          : "bg-gradient-to-r from-cyan-500/20 to-green-500/20 text-cyan-300 border-cyan-400/30 hover:border-cyan-400/60",
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill}
    </Badge>
  );
}
