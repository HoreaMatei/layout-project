import React from "react";
import { useInsight } from "../hooks/useInsightContext";
import ArrowUpButton from "./ArrowUpButton";

const InsightsComponent: React.FC = () => {
  const { title, readTime, date, imgUrl, linkTo } = useInsight();

  return (
    <div className="w-[80vw]">
      <div className=" relative flex flex-col gap-6 group cursor-pointer ">
        <a href={linkTo} className="lg:w-[26vw] overflow-hidden  ">
          <img
            src={imgUrl}
            alt="image"
            className=" transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden lg:w-[26vw] object-cover lg:h-[300px]"
          />
        </a>
        <div className=" flex flex-col gap-2">
          {" "}
          <div className="flex flex-row gap-5 text-[#979797] ">
            <div className="flex flex-row items-center gap-1">
              <img
                alt="calendar icon"
                src="/insights/calendar.png"
                className="h-[18px]"
              />
              <p>{date}</p>
            </div>
            <div className="flex flex-row  items-center gap-1 ">
              <img
                alt="clock icon"
                src="/insights/clock.png"
                className="h-[18px]"
              />

              <p>{readTime}</p>
            </div>
            <div className="absolute right-9 top-3">
              <ArrowUpButton />
            </div>
          </div>
          <h3 className="text-2xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default InsightsComponent;
