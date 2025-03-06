import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "../Reveal-comp/RevealOnScroll";

export const BoldIdeasSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fadeInTexty = useTransform(
    scrollYProgress,

    [0.1, 0.5],
    ["10%", "-160%"]
  );
  return (
    <div
      ref={targetRef}
      className=" flex flex-col text-[30vh] text-center  uppercase m-auto w-[94vw]"
    >
      <RevealOnScroll>
        <p className="">Straight</p>
      </RevealOnScroll>

      <div className=" m-auto h-[30vh] gap-10 flex flex-row items-center ">
        <RevealOnScroll>
          <p>to the</p>
        </RevealOnScroll>
        <img
          className="lg:w-[28vw] lg h-[24vh]  object-cover"
          src="/straight/head.avif"
        />
      </div>

      <RevealOnScroll>
        <p className="w-100%"> bold ideas</p>
      </RevealOnScroll>
    </div>
  );
};
