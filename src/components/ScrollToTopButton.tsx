
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Save last scroll position
      setLastScrollPosition(window.scrollY);
      
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Save last position before scrolling to top
    setLastScrollPosition(window.scrollY);
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full h-12 w-12 p-0 flex items-center justify-center bg-primary shadow-lg hover:bg-primary/90"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
