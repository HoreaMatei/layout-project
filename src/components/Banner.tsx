import clsx from "clsx";
import { useBanner } from "../hooks/useBannerContext";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BannerProps {
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fadeInTextx = useTransform(
    scrollYProgress,
    [0.6, 0.9],
    ["-30%", "-10%"]
  );

  const { title, leftText, rightText, buttonText, image, linkTo } = useBanner();
  return (
    <motion.section
      ref={targetRef}
      // style={{
      //   backgroundImage: `url(${image})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      className={clsx(
        " brightness-90 overflow-hidden text-white flex align-middle items-center justify-center m-auto  sm:h-[70vh]  relative mb-5",
        className
      )}
    >
      <motion.div
        style={{
          boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
          y: fadeInTextx,
          // y: "-14%",
        }}
        className=" flex justify-center h-[70vh]  sm:w-[95vw]   sm:h-[60vh]"
      >
        {" "}
        <img
          src={image}
          alt="image-banner"
          className="w-[98vw] h-[95vh]  sm:w-[90vw]  sm:h-[90vh] object-cover "
        />
      </motion.div>

      <p className="absolute top-14 sm:left-10 sm:top-10 text-lg sm:text-xl">
        {leftText}
      </p>
      <p className="absolute top-20 sm:top-10 text-lg sm:text-xl sm:right-10">
        {rightText}{" "}
      </p>
      <p className="uppercase top-40 sm:top-60 absolute  text-4xl sm:text-8xl sm:mt-10">
        {title}{" "}
      </p>
      <div className="absolute top-60 sm:top-110 w-[200px]">
        <Button linkTo={linkTo} text={buttonText} className=" top-0 left-0" />
      </div>
    </motion.section>
  );
};

export default Banner;
