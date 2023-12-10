// Importing necessary dependencies and assets
import { useState } from "react"; // Importing useState hook from React
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Importing icons from Heroicons library
import Logo from "@/assets/Logo.png"; // Importing Logo asset
import Link from "./Link"; // Importing Link component
import { SelectedPage } from "@/shared/types"; // Importing the SelectedPage type from shared types
import useMediaQuery from "@/hooks/useMediaQuery"; // Importing useMediaQuery custom hook
import ActionButton from "@/shared/ActionButton"; // Importing ActionButton component

// Define Props type for the Navbar component
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

// Navbar component definition
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  // Constants for styling
  const flexBetween = "flex items-center justify-between";
  // State to manage the visibility of the mobile menu
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  // Custom hook to determine screen size
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  // Dynamic styling for the navbar background
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      {/* Navbar container with dynamic styling */}
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        {/* Container for navbar content with dynamic width */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Left and right sections of the navbar */}
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE - Logo */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {/* Conditional rendering based on screen size */}
            {isAboveMediumScreens ? (
              // Desktop view - Right side with links and buttons
              <div className={`${flexBetween} w-full`}>
                {/* Links to different sections */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Sign In and Become a Member buttons */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              // Mobile view - Toggle button for the menu
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {/* Conditional rendering of mobile menu based on screen size and menu toggle state */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          {/* Close button to hide the mobile menu */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          {/* List of menu items for different sections */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

// Exporting the Navbar component
export default Navbar;
