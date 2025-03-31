import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const NumbersSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fadeInNumbersDiv = useTransform(
    scrollYProgress,

    [0.1, 0.5],
    ["1%", "160%"]
  );

  return (
    <div className="flex z-50 flex-col items-center w-[100vw]  h-fit sm:h-[40vh] relative ">
      <motion.section className="w-[70vw] relative m-auto h-fit sm:h-[60vh]  items-center justify-between flex flex-col ">
        <div
          className="flex flex-col h-fit   sm:flex-row gap-2 sm:gap-40"
          ref={targetRef}
        >
          {" "}
          <div className="  relative">
            <div className=" w-[320px] items-center justify-center align-middle  text-white">
              <p className="w-[300px] m-auto text-8xl sm:text-9xl text-center">
                19
              </p>
              <p className="w-[300px] m-auto text-center">Featured Work</p>
            </div>
            <div className=" h-[160px] top-0 w-[320px] absolute  left-0 m-auto overflow-hidden">
              <motion.div
                style={{
                  boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
                  x: fadeInNumbersDiv,
                  y: "-10%",
                }}
                className="lg:w-[300px]  z-40 h-[30vh]   bg-black"
              ></motion.div>
            </div>
          </div>
          <div className="relative   ">
            <div className=" w-[320px] items-center justify-center align-middle  text-white">
              <p className="w-[300px] m-auto text-8xl sm:text-9xl text-center">
                350+
              </p>
              <p className="w-[300px] m-auto text-center">Projects Completed</p>
            </div>
            <div className=" h-[160px] top-0 w-[320px] absolute  left-0 m-auto overflow-hidden">
              <motion.div
                style={{
                  boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
                  x: fadeInNumbersDiv,
                  y: "-10%",
                }}
                className="lg:w-[330px]  z-40 h-[30vh]   bg-black"
              ></motion.div>
            </div>
          </div>
          <div className="relative">
            <div className=" w-[320px] items-center justify-center align-middle  text-white">
              <p className="w-[300px] m-auto text-8xl sm:text-9xl text-center">
                39X
              </p>
              <p className="w-[300px] m-auto text-center">Awards Featured</p>
            </div>
            <div className=" h-[160px] top-0 w-[320px] absolute  left-0 m-auto overflow-hidden">
              <motion.div
                style={{
                  boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
                  x: fadeInNumbersDiv,
                  y: "-10%",
                }}
                className="lg:w-[300px]  z-40 h-[30vh]   bg-black"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default NumbersSection;
