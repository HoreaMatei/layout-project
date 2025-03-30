import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "../components/LandingPage.css";
import Button from "../components/Button";
import AboutUsComponent from "../components/AboutUsComponent";
import HeaderImagesDiv from "../components/HeaderImagesDiv";
import AnimatedImageGrid from "../components/AnimatedImageGrid";

export const Landing: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null); // Create ref for Landing section

  // Handle scroll speed specifically for this component
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (
        targetRef.current &&
        targetRef.current.contains(event.target as Node)
      ) {
        // If the scroll is within the target (Landing section), modify the scroll speed
        event.preventDefault();
        window.scrollBy({
          top: event.deltaY * 0.4, // Adjust this multiplier for scroll speed
          behavior: "smooth",
        });
      }
    };

    // Add the wheel event listener to the window
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const fadeInDivx = useTransform(
    scrollYProgress,
    [0.1, 1.1],
    ["-750%", "260%"]
  );
  const textX = useTransform(scrollYProgress, [0.1, 1.1], ["20px", "-100%"]);
  const textY = useTransform(scrollYProgress, [0.1, 1.2], ["120%", "-40%"]);
  const descriptionY = useTransform(
    scrollYProgress,
    [0.1, 1.2],
    ["150%", "-130%"]
  );
  return (
    <motion.section
      ref={targetRef}
      className="mt-[50vh] flex h-[120vh] items-start justify-center z-0 "
    >
      <HeaderImagesDiv />

      <motion.div
        className="  w-[100vw] relative z-10  flex flex-col gap-[20vw]  align-baseline justify-center items-center"
        style={{ y: textY }}
      >
        <div className=" relative items-center justify-center hidden sm:flex flex-row w-[100vw] sm:gap-[20vw] ">
          <img
            src="./bgpic4.jpg"
            alt="pic"
            className="relative ml-[40vw] lg:w-[18vw]  z-10"
          />

          <img
            src="./bgpic5.avif"
            alt="pic"
            className="relative object-cover  lg:w-[22vw] lg:h-[50vh]  z-10"
          />
        </div>
        <motion.div
          style={{ y: descriptionY }}
          className=" bg-black pt-10 sm:pt-24 z-20 ml-200 relative w-[100vw] h-[90vh] text-center overflow-hidden"
        >
          <AboutUsComponent />

          <motion.div
            style={{
              boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
              x: fadeInDivx,
              y: "-20%",
            }}
            className="hidden sm:block lg:w-[45vw] m-auto relative z-40 h-[40vh] mt-1 lg:mt-[-30vh]  bg-black"
          ></motion.div>
          <Button linkTo="/about" text="about us" className="mt-[-80px] " />

          <div className=" w-[60vw] m-auto  h-[25vh] mt-40 flex justify-center align content-center  ">
            <AnimatedImageGrid />
          </div>
        </motion.div>
      </motion.div>

      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0    ">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-60%" }}
          className=" whitepspace-nowrap tracking-tighter  text-white min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[25vw]  "
        >
          DIGITAL CREATIVE STUDIO
        </motion.p>
      </div>
    </motion.section>
  );
};
