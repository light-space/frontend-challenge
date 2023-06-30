import { Loader2 } from "lucide-react";
import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex gap-2">
      <Loader2 className="animate-spin" />
      Loading ...
    </div>
  );
}

export default LoadingSpinner;
