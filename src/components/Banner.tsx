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
        " brightness-90 overflow-hidden text-white flex align-middle items-center justify-center m-auto h-[70vh]  relative mb-5",
        className
      )}
    >
      <motion.div
        style={{
          boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
          y: fadeInTextx,
          // y: "-14%",
        }}
        className=" flex justify-center lg:w-[95vw] lg:h-[60vh]"
      >
        {" "}
        <img
          src={image}
          alt="image-banner"
          className=" w-[90vw] h-[70h] object-cover m-auto"
        />
      </motion.div>

      <p className="absolute left-10 top-10 text-xl">{leftText}</p>
      <p className="absolute top-10 text-xl right-10">{rightText} </p>
      <p className="uppercase top-60 absolute text-8xl mt-10">{title} </p>
      <div className="absolute top-110 w-[200px]">
        <Button linkTo={linkTo} text={buttonText} className=" top-0 left-0" />
      </div>
    </motion.section>
  );
};

export default Banner;
