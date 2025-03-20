import Button from "./Button";
import MediaComponent from "./MediaComponent";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PlanProps {
  imgUrl: string;
  index: number;
}

const Plan: React.FC<PlanProps> = ({ imgUrl, index }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const planFadeY = useTransform(
    scrollYProgress,

    [0.1, 0.3],
    ["-20%", "-40%"]
  );

  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "flex-row " : " flex-row-reverse"
      }  text-white lg:w-[92vw] m-auto h-[80vh] bg-stone-900`}
    >
      <div
        className=" lg:w-[50%] lg:h-[100%] bg-cover bg-center "
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="lg:w-[50%] lg:h-[100%] flex ">
        <div className="w-[80%] m-auto h-[70%] flex flex-col justify-between  ">
          <div className="flex flex-col h-[55%] justify-between">
            <h1 className="uppercase text-8xl">Strategy</h1>
            <p className="text-3xl w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <MediaComponent />
          </div>

          <Button
            linkTo="/plans"
            text="explore plans"
            className="w-[200px] text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
