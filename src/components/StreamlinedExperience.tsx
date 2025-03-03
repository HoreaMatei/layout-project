// import { stylesWithCssVar } from "@/utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./LandingPage.css";

export const StreamlinedExperience = () => {
  window.addEventListener(
    "wheel",
    function (event) {
      event.preventDefault();
      window.scrollBy({
        top: event.deltaY * 0.15, // Adjust this multiplier to control speed
        behavior: "smooth",
      });
    },
    { passive: false }
  );

  const targetRef = useRef<HTMLDivElement | null>(null);
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
      <div>
        <img
          src="./redbg.avif"
          className="absolute top-16 left-94 z-10 w-[42vw] lg:w-[17vw] lg:h-[19vw]  object-cover "
          alt="pic"
        />
        <img
          src="./bgpic1.avif"
          className="absolute z-10 top-50 right-46 w-[11vw]"
          alt="pic"
        />
        <img
          src="./bgpic2.avif"
          alt="pic"
          className="lg:w-[22vw] lg:h-[25vw] absolute  left-16 "
        />
        <img
          src="./bgpic3.avif"
          alt="pic"
          className="absolute right-110 w-[15vw] h-[38vh] top-160"
        />
      </div>

      <motion.div
        className=" w-[100vw] relative z-10   flex flex-col gap-[20vw]  align-baseline justify-center items-center"
        style={{ y: textY }}
      >
        <div className="relative items-center justify-center  flex flex-row w-[100vw] gap-[20vw] ">
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
          className="bg-black pt-24 z-20 ml-200 relative w-[100vw] h-[90vh] text-center"
        >
          <p className="  lg:w-[36vw] lg:m-auto lg:mt-10 text-white text-3xl text-center z-10 leading-14 font-bold">
            Line Studio® is a versatile creative studio specializing in
            Branding, Web Design, and Development. We empower clients to elevate
            their brands, expand their reach, and distinguish themselves in
            their industry through impactful solutions and innovative design.
          </p>

          <motion.div
            style={{
              boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
              x: fadeInDivx,
              y: "-20%",
            }}
            className="lg:w-[45vw] m-auto relative z-40 h-[45vh] mt-[-30vh]  bg-red-400"
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="relative  z-10 bg-black  w-[100vw]"
        style={{ y: textY }}
      >
        <p className="text-red-500 text-[3vh] w-[40%] m-auto z-50">
          Line Studio® is a versatile creative studio specializing in Branding,
          Web Design, and Development. We empower clients to elevate their
          brands, expand their reach, and distinguish themselves in their
          industry through impactful solutions and innovative design.
        </p>
        <button className="uppercase">About us</button>
      </motion.div> */}

      {/* <motion.div style={{ y: textY }} className="relative  z-1 bg-black ">
        <div className="w-[100vw] ">hi</div>
      </motion.div> */}

      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0    ">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="font-thin font-roboto  cool  whitepspace-nowrap text-white min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[30vw]  "
        >
          DIGITAL CREATIVE STUDIO
        </motion.p>
      </div>
    </motion.section>
  );
};
