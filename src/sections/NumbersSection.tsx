import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../components/Button";
import ExpertiseText from "../components/ExpertiseText";
const NumbersSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const fadeInDivx = useTransform(
    scrollYProgress,
    [0.4, 1.2],
    ["-10%", "230%"]
  );

  const fadeInTextx = useTransform(scrollYProgress, [0.8, 1.2], ["1%", "240%"]);

  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh] ">
      <motion.section className="w-[70vw] relative m-auto h-[60vh]  items-center justify-between flex flex-col ">
        <div className="flex flex-row gap-40" ref={targetRef}>
          {" "}
          <div className=" relative">
            <div className=" w-[320px] items-center justify-center align-middle  text-white">
              <p className="w-[300px] m-auto text-9xl text-center">19</p>
              <p className="w-[300px] m-auto text-center">Featured Work</p>
            </div>
            <div className=" h-[160px] top-0 w-[320px] absolute  left-0 m-auto overflow-hidden">
              <motion.div
                style={{
                  boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
                  x: fadeInDivx,
                  y: "-10%",
                }}
                className="lg:w-[300px]  z-40 h-[30vh]   bg-black"
              ></motion.div>
            </div>
          </div>
          <div className=" relative ">
            <div className=" w-[320px] items-center justify-center align-middle  text-white">
              <p className="w-[300px] m-auto text-9xl text-center">350+</p>
              <p className="w-[300px] m-auto text-center">Projects Completed</p>
            </div>
            <div className=" h-[160px] top-0 w-[320px] absolute  left-0 m-auto overflow-hidden">
              <motion.div
                style={{
                  boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
                  x: fadeInDivx,
                  y: "-10%",
                }}
                className="lg:w-[350px]  z-40 h-[30vh]   bg-black"
              ></motion.div>
            </div>
          </div>
          <div className="relative">
            <div className=" w-[320px] items-center justify-center align-middle  text-white">
              <p className="w-[300px] m-auto text-9xl text-center">39X</p>
              <p className="w-[300px] m-auto text-center">Awards Featured</p>
            </div>
            <div className=" h-[160px] top-0 w-[320px] absolute  left-0 m-auto overflow-hidden">
              <motion.div
                style={{
                  boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
                  x: fadeInDivx,
                  y: "-10%",
                }}
                className="lg:w-[300px]  z-40 h-[30vh]   bg-black"
              ></motion.div>
            </div>
          </div>
        </div>
        <ExpertiseText />
        {/* <div
          ref={targetRef}
          className="flex flex-col  items-center justify-between h-[25vh] "
        >
          <div className="relative lg:w-[40vw]">
            <p className="text-white text-5xl lg:w-[40vw] text-center">
              Our expertise is in designing visuals that effectively connect
              with the target audience.
            </p>
            <div className=" h-[160px] top-0 lg:w-[40vw] absolute  left-0 m-auto overflow-hidden">
              <motion.div
                style={{
                  boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
                  x: fadeInTextx,
                  y: "-14%",
                }}
                className="lg:w-[40vw]  z-40 h-[30vh]   bg-black"
              ></motion.div>
            </div>
          </div>
          <Button text="Work with us" />
        </div> */}
      </motion.section>
    </div>
  );
};

export default NumbersSection;
