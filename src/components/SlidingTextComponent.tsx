import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

interface SlidingTextProps {
  text: string;
}

const SlidingTextComponent: React.FC<SlidingTextProps> = ({ text }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fadeInDivx = useTransform(scrollYProgress, [0.1, 0.5], ["1%", "140%"]);

  return (
    <div className="relative  ">
      <div
        ref={targetRef}
        className="h-[14vh] w-screen sm:w-[50vw] m-auto relative overflow-hidden"
      >
        <p className=" text-xl sm:text-4xl mt-4 h-20 text-center w-[90vw] sm:w-[36vw] m-auto">
          {text}
        </p>
        <motion.div
          style={{
            boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
            x: fadeInDivx,
            y: "-70%",
          }}
          className="lg:w-[50vw] m-auto relative z-40 h-[30vh] sm:h-[60vh]   bg-black"
        ></motion.div>
      </div>
    </div>
  );
};

export default SlidingTextComponent;
