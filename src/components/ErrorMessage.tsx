import { Button } from "@/components/ui/button";
import { RefreshCw, AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <AlertCircle className="h-16 w-16 text-red-400 mx-auto" />
          <h2 className="text-2xl font-semibold">Oops! Something went wrong</h2>
          <p className="text-gray-400 leading-relaxed">{message}</p>
        </div>

        {onRetry && (
          <Button
            onClick={onRetry}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        )}

        <p className="text-sm text-gray-500">
          If the problem persists, please contact{" "}
          <a
            href="mailto:narenchoudhary5566@gmail.com"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            narenchoudhary5566@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
