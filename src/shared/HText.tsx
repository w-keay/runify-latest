// Import React
import React from "react";

// Define the props for the HText component
type Props = {
  children: React.ReactNode;
};

// HText component
const HText = ({ children }: Props) => {
  return (
    // Heading 1 element with specified styling
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};

// Export the HText component
export default HText;
