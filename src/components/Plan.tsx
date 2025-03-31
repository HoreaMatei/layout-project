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
    // <div
    //   className={`flex bg-red-500    ${
    //     index % 2 === 0 ? " flex-row   " : " flex-row-reverse"
    //   }  text-white w-screen sm:w-[92vw] m-auto h-[80vh] bg-stone-900`}
    // >
    //   <div
    //     className=" w-[50%] z-50   sm:h-[100%] bg-cover bg-center "
    //     style={{ backgroundImage: `url(${imgUrl})` }}
    //   ></div>
    //   <div className="sm:w-[50%] sm:h-[100%] flex ">
    //     <div className="w-10 sm:w-[80%] m-auto h-[70%] flex flex-col justify-between  ">
    //       <div className="flex flex-col h-[55%] justify-between">
    //         <h1 className="uppercase text-3xl sm:text-8xl">Strategy</h1>
    //         <p className="text-xl sm:text-3xl w-[70%]">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //         </p>
    //         <MediaComponent />
    //       </div>

    //       <Button
    //         linkTo="/plans"
    //         text="explore plans"
    //         className="w-[200px] text-center"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div
      className={`flex flex-wrap  ${
        index % 2 === 0 ? "  sm:flex-row  " : " sm:flex-row-reverse"
      }  text-white w-[95vw] sm:w-[92vw] m-auto h-fit ms:h-[80vh] bg-stone-900`}
    >
      <div
        className=" w-screen sm:w-[50%]  h-[50vh] sm:h-[80vh] bg-cover bg-center "
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="w-screen sm:w-[50%] h-[400px] sm:h-[80vh] flex ">
        <div className=" sm:w-[80%] m-auto h-fit sm:h-[70%] flex flex-col justify-between  ">
          <div className="flex flex-col w-[80vw] m-auto h-[60%] sm:h-[55%] justify-between gap-5">
            <h1 className="uppercase text-5xl sm:text-8xl">Strategy</h1>
            <p className="text-xl sm:text-3xl w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <MediaComponent />
          </div>

          <Button
            linkTo="/plans"
            text="explore plans"
            className="w-[200px] mt-10 sm:mt-0 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
