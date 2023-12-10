// Importing necessary dependencies and assets
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorStrava from "@/assets/SponsorStrava.png";
import SponsorGarmin from "@/assets/SponsorGarmin.png";
import SponsorHoka from "@/assets/SponsorHoka.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      {/* Motion component for viewport enter animation */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          {/* Motion component for heading animations */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* Container for the header image with relative positioning */}
            <div className="relative">
              {/* Image element for the HomePageText with alt text */}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-runnertext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            {/* Paragraph with additional information */}
            <p className="mt-8 text-sm">
              Elevate Your Run with Advanced Metrics and Expert Guidance. Achieve Your Peak Performance, Anytime, Anywhere.
            </p>
          </motion.div>

          {/* ACTIONS */}
          {/* Motion component for action buttons animations */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* ActionButton component for joining */}
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            {/* AnchorLink for smooth scrolling to ContactUs section */}
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        {/* Container for the graphic image with flex layout */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          {/* Image element for the HomePageGraphic with alt text */}
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {/* Conditionally rendering sponsors section based on screen size */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          {/* Container for sponsors with specified width */}
          <div className="mx-auto w-5/6">
            {/* Flex container for sponsors with specified width and alignment */}
            <div className="flex w-3/5 items-center justify-between gap-8">
              {/* Image elements for sponsor logos with alt text */}
              <img alt="strava-sponsor" src={SponsorStrava} />
              <img alt="garmin-sponsor" src={SponsorGarmin} />
              <img alt="hoka-sponsor" src={SponsorHoka} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Exporting the Home component
export default Home;
