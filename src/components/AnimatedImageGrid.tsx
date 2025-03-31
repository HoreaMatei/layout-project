import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./AnimatedGrid.css";

// const images = [
//   "/imgGrid/logo1.avif",
//   "/imgGrid/logo3.avif",
//   "/imgGrid/logo2.avif",
//   "/imgGrid/logo4.avif",
//   "/imgGrid/logo5.avif",
//   "/imgGrid/logo1.avif",
//   "/imgGrid/logo6.avif",
//   "/imgGrid/logo5.avif",
// ];

const images = [
  "/imgGrid/logo1.avif",
  "/imgGrid/logo2.avif",
  "/imgGrid/logo3.avif",
  "/imgGrid/logo4.avif",
  "/imgGrid/logo5.avif",
  "/imgGrid/logo6.avif",
  "/imgGrid/logo7.avif",
  "/imgGrid/logo8.avif",
];
const AnimatedImageGrid: React.FC = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    Array.from({ length: 8 }, (_, i) => i)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prevIndexes) =>
        prevIndexes.map((index) => (index + 1) % images.length)
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="   z-50 grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-1 sm:gap-5 text-center gap-y-14 w-[80vw] sm:w-[90vw] max-w-4xl ">
      {activeIndexes.map((index, i) => (
        <div
          key={i}
          className="relative flex justify-center items-center w-full h-14 sm:h-12 overflow-hidden text-center "
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Image ${index + 1}`}
              className="gridImage absolute left-6 sm:left-15 inset-0 w-[120px] sm:w-[100px] h-full object-cover"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default AnimatedImageGrid;
