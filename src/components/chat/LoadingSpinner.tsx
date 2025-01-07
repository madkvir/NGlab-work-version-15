import { Loader2 } from "lucide-react";

const LoadingSpinner = () => (
  <div className="fixed bottom-4 right-4 z-50">
    <div className="bg-gray-900/90 rounded-full p-3">
      <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
    </div>
  </div>
);

export default LoadingSpinner;
