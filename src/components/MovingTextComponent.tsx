import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Bar: React.FC = () => {
  return (
    <div className="border-b-1 ml-10 h-[300px]  border-white group-hover:border-black ">
      <div className=" opacity-0">t</div>
    </div>
  );
};

const MovingTextComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/contact")}
      className="uppercase cursor-pointer relative overflow-hidden w-full hover:text-black hover:bg-white h-[50vh] flex items-center bg-black text-white"
    >
      <motion.div
        className="tracking-tighter flex space-x-10 text-[42vh] whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 17, // Adjust speed if needed
          ease: "linear",
        }}
      >
        <div className="flex text-[40vh] group">
          <h1 className="whitespace-nowrap">Work with us</h1>
          <div className="ml-0 ">
            <Bar />
          </div>
          <h1 className="whitespace-nowrap">Let's chat</h1>
          <Bar />
        </div>
        <div className="flex text-[40vh]">
          <h1 className="whitespace-nowrap">Work with us</h1>
          <Bar />
          <h1 className="whitespace-nowrap">Let's chat</h1>
          <Bar />
        </div>
      </motion.div>
    </div>
  );
};

export default MovingTextComponent;
