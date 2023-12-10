// Define Props type for the Class component
type Props = {
  name: string;
  description?: string;
  image: string;
};

// Class component definition
const Class = ({ name, description, image }: Props) => {
  // Styles for the overlay that appears on hover
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    // List item with relative positioning
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      {/* Overlay div with class-specific information */}
      <div className={overlayStyles}>
        {/* Class name in larger text */}
        <p className="text-2xl">{name}</p>
        {/* Optional class description */}
        <p className="mt-5">{description}</p>
      </div>
      {/* Image of the class */}
      <img alt={`${image}`} src={image} />
    </li>
  );
};

// Exporting the Class component
export default Class;
