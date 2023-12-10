// Importing necessary dependencies and types
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Define animation variants for motion component
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 }, // Define initial hidden state
  visible: { opacity: 1, scale: 1 }, // Define visible state for animation
};

// Define the Props type for the Benefit component
type Props = {
  icon: JSX.Element;  // Icon element for the benefit
  title: string; // Title of the benefit
  description: string; // Description of the benefit
  setSelectedPage: (value: SelectedPage) => void; // Function to set the selected page
};

// Benefit component definition
const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    // Motion component for animation with defined variants
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        {/* Learn More link within the AnchorLink */}
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

// Export the Benefit component as the default export
export default Benefit;
