import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "../Reveal-comp/RevealOnScroll";

export const BoldIdeasSection: React.FC = () => {
  return (
    <div className=" flex flex-col text-7xl  sm:text-[30vh] text-left mt-20 uppercase m-auto w-[80vw]">
      <RevealOnScroll>
        <p className="">Straight</p>
      </RevealOnScroll>

      <div className="ml-0  sm:m-auto sm:h-[30vh] gap-10 flex  flex-row items-center ">
        <RevealOnScroll>
          <p>to the</p>
        </RevealOnScroll>
        <img
          className=" h-20 sm:w-[28vw]  sm:h-[24vh]  object-cover"
          src="/straight/head.avif"
        />
      </div>

      <RevealOnScroll>
        <p className="w-100%"> bold ideas</p>
      </RevealOnScroll>
    </div>
  );
};
