import clsx from "clsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

interface TitleProps {
  text: string;
  className: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div className="sticky top-20 z-0  ">
      <div className="">
        <div className="relative flex ">
          <motion.div
            initial={{ y: 100, opacity: 0 }} // Start 100px below
            animate={isVisible ? { y: 0, opacity: 1 } : {}} // Move to normal position
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            className={clsx(
              " tracking-tighter  m-auto mt-10 uppercase",
              className
            )}
          >
            {text}
          </motion.div>
          <img
            src="/bgpic1.avif"
            alt="bg-img"
            className=" hidden sm:block h-40 md:h-52  lg:h-72 absolute right-1 lg:right-20 top-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
