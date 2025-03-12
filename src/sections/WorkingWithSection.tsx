import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WorkingWithSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fadeInDivx = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    ["-10%", "140%"]
  );
  return (
    <motion.section
      className="mt-36 w-[100vw] flex flex-col items-center justify-center align-ce
    "
    >
      <img
        src="/head.avif"
        className="h-50 rounded-full w-50 object-cover object-center"
        alt="headshot"
      />
      <div
        ref={targetRef}
        className="w-[70vw] border-b-1 text-white relative m-auto mt-10 "
      >
        <p className="  text-white w-[60vw] text-center text-8xl m-auto mb-24">
          "Working with LINE Studio was an exceptional experience from start to
          finish."
        </p>

        <div className="absolute top-0 left-0 w-[70vw] m-auto overflow-hidden">
          <motion.div
            style={{
              boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
              x: fadeInDivx,
              y: "-10%",
            }}
            className="lg:w-[80vw]  z-40 h-[70vh]   bg-black"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkingWithSection;
