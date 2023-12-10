import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    // Listener function to update the state when the media query changes
    const listener = () => setMatches(media.matches);
    
    // Add event listener for the resize event
    window.addEventListener("resize", listener);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  // Return the current status of the media query
  return matches;
};

// Export the custom hook

export default useMediaQuery;
