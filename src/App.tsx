import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  // State to manage the selected page and whether the user is at the top of the page
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // Effect to handle scroll events and update state accordingly
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is at the top of the page
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      // Check if the user has scrolled down
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach scroll event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  // Render the components
  return (
    <div className="app bg-gray-20">
      {/* Navbar component with props */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* Home component with props */}
      <Home setSelectedPage={setSelectedPage} />
      {/* Benefits component with props */}
      <Benefits setSelectedPage={setSelectedPage} />
      {/* OurClasses component with props */}
      <OurClasses setSelectedPage={setSelectedPage} />
      {/* ContactUs component with props */}
      <ContactUs setSelectedPage={setSelectedPage} />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
