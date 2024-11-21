import { Leaf, Clock, Flag } from "lucide-react";

export function ProductFeatures() {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center">
        <Leaf className="w-5 h-5 mr-2 text-green-600" />
        <span>Every order plants a tree</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-5 h-5 mr-2 text-blue-600" />
        <span>Same day dispatch before 12pm</span>
      </div>
      <div className="flex items-center">
        <Flag className="w-5 h-5 mr-2 text-red-600" />
        <span>Made in Australia</span>
      </div>
    </div>
  );
}