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
    <div className="relative  " ref={targetRef}>
      <div className=" h-[14vh] w-[50vw] m-auto relative overflow-hidden">
        <p className="text-4xl mt-4 text-center w-[36vw] m-auto">{text}</p>
        <motion.div
          style={{
            boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
            x: fadeInDivx,
            y: "-70%",
          }}
          className="lg:w-[50vw] m-auto relative z-40 h-[60vh]   bg-black"
        ></motion.div>
      </div>
    </div>
  );
};

export default SlidingTextComponent;
