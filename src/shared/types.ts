// Enumeration for the selected pages
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

// Interface defining the structure for a BenefitType
export interface BenefitType {
  icon: JSX.Element; // JSX.Element type for the icon
  title: string; // Title of the benefit
  description: string; // Description of the benefit
}

// Interface defining the structure for a ClassType
export interface ClassType {
  name: string; // Name of the class
  description?: string; // Optional description of the class
  image: string; // Image URL for the class
}
