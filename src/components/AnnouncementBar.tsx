import { Download, X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground text-center py-2.5 px-4 text-xs sm:text-sm font-display italic tracking-wide">
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        Underpaid? Stuck in your career? 
        <a
          href="#"
          className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          <Download size={14} />
          Get Your Detailed Career Report
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
