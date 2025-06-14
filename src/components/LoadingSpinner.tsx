import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center space-y-4">
        <div
          className={cn(
            "animate-spin rounded-full border-2 border-purple-500/20 border-t-purple-500",
            sizeClasses[size],
            className,
          )}
        />
        <p className="text-gray-400 text-lg">Loading portfolio...</p>
      </div>
    </div>
  );
}
