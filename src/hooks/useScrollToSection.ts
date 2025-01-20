import { useCallback } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToSection() {
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  // Handle initial load with hash
  const handleInitialScroll = useCallback(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);
    }
  }, [location.hash, scrollToSection]);

  return { scrollToSection, handleInitialScroll };
}
