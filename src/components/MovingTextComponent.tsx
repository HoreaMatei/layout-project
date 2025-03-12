import React from "react";
import { motion } from "framer-motion";

const MovingTextComponent: React.FC = () => {
  return (
    <div className="uppercase cursor-pointer relative overflow-hidden w-full hover:text-black hover:bg-white h-[50vh] flex items-center bg-black text-white">
      <motion.div
        className="flex space-x-10 text-[40vh] whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 17, // Adjust speed if needed
          ease: "linear",
        }}
      >
        <div className="flex text-[40vh]">
          <h1 className="whitespace-nowrap">Work with us</h1>
          <div className="ml-0">-</div>
          <h1 className="whitespace-nowrap">Let's chat</h1>
          <div>-</div>
        </div>
        <div className="flex text-[40vh]">
          <h1 className="whitespace-nowrap">Work with us</h1>
          <div className="ml-0">-</div>
          <h1 className="whitespace-nowrap">Let's chat</h1>
          <div>-</div>
        </div>
      </motion.div>
    </div>
  );
};

export default MovingTextComponent;
