// Importing Logo asset
import Logo from "@/assets/Logo.png";

// Footer component definition
const Footer = () => {
  return (
    // Footer container with background color and padding
    <footer className="bg-primary-100 py-16">
      {/* Container with flex layout, centered and with specified width */}
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* Logo Section */}
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* Image element for the Logo with alt text */}
          <img alt="logo" src={Logo} />
          {/* Placeholder paragraph */}
          <p className="my-5">
            {/* Placeholder text or content */}        
          </p>
          {/* Copyright information */}
          <p>© Runify All Rights Reserved.</p>
        </div>
        {/* Second Section */}
        <div className="mt-16 basis-1/4 md:mt-0">
          {/* Placeholder heading */}
          <h4 className="font-bold">
            {/* Placeholder text for the heading */}
          </h4>
          {/* Placeholder paragraph */}
          <p className="my-5">
            {/* Placeholder text or content */}
          </p>
          {/* Placeholder paragraph */}
          <p className="my-5">
            {/* Placeholder text or content */}
          </p>
          {/* Placeholder paragraph */}
          <p>
            {/* Placeholder text or content */}
          </p>
        </div>
        {/* Contact Us Section */}
        <div className="mt-16 basis-1/4 md:mt-0">
          {/* Heading for the Contact Us section */}
          <h4 className="font-bold">Contact Us</h4>
          {/* Email address */}
          <p className="my-5">keaykeay99@gmail.com</p>
          {/* Phone number */}
          <p>(+44)7399044018</p>
        </div>
      </div>
    </footer>
  );
};

// Exporting the Footer component
export default Footer;
