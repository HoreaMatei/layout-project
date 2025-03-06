import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

const ExpertiseText: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fadeInTextx = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    ["-1%", "230%"]
  );

  return (
    <motion.section
      ref={targetRef}
      className="flex flex-col  items-center justify-between h-[20vh] "
    >
      <div className="relative lg:w-[40vw]">
        <p className="text-white text-4xl lg:w-[40vw] text-center">
          Our expertise is in designing visuals that effectively connect with
          the target audience.
        </p>
        <div className=" h-[160px] top-0 lg:w-[40vw] absolute  left-0 m-auto overflow-hidden">
          <motion.div
            style={{
              boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
              x: fadeInTextx,
              y: "-14%",
            }}
            className="lg:w-[40vw]  z-40 h-[30vh]   bg-black"
          ></motion.div>
        </div>
      </div>
      <Button text="Work with us" />
    </motion.section>
  );
};

export default ExpertiseText;
