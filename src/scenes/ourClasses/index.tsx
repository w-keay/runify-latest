import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Interval Blasts: Sprinting Sessions",
    description:
      "Elevate your speed and endurance with heart-pumping interval sprints designed to push your limits.",
    image: image1,
  },
  {
    name: "Hill Mastery: Uphill Challenge",
    description:
      "Conquer inclines and build strength as you tackle uphill terrains, enhancing both your stamina and muscle power.",
    image: image2,
  },
  {
    name: "Endurance Odyssey: Long-Distance Adventure",
    description:
      "Embark on a journey of sustained running, pushing your limits and building the endurance needed for longer distances.",
    image: image3,
  },
  {
    name: "Agility Agility: Speed and Precision Drills",
    description:
      "Sharpen your reflexes and enhance agility with a series of dynamic drills that focus on speed, control, and precision.",
    image: image4,
  },
  {
    name: "Trail Blazer: Off-Road Running Excursion",
    description:
    "Escape the ordinary and embrace the rugged terrain in this off-road adventure, combining trail running with the thrill of exploration.",
    image: image5,
  },
  {
    name: "HIIT the Road: High-Intensity Interval Training",
    description:
      "Experience the benefits of high-intensity interval training (HIIT) tailored specifically for runners, amplifying your cardiovascular fitness and calorie burn.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR TRAINING PLANS</HText>
            <p className="py-5">
              Take a look at some of our plans, preparing for a big race?
              Or just want to learn how to run a 5k?
              We've got you covered!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
