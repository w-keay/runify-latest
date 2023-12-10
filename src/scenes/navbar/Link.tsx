// Importing necessary dependencies and components
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Define Props type for the Link component
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

// Link component definition
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // Generate a lowercased and space-removed version of the page name
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    // Anchor link component for smooth scrolling
    <AnchorLink
      // Dynamic class based on selected page
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      // Href with the corresponding section id
      href={`#${lowerCasePage}`}
      // Click handler to update the selected page
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {/* Displaying the page name */}
      {page}
    </AnchorLink>
  );
};

// Exporting the Link component
export default Link;
