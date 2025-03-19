import clsx from "clsx";
import React from "react";

interface TitleProps {
  text: string;
  className: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className="sticky top-0 z-0  ">
      <div className="">
        <div className="relative flex ">
          <h1
            className={clsx(
              " tracking-tighter  m-auto mt-10 uppercase",
              className
            )}
          >
            {text}
          </h1>
          <img
            src="/bgpic1.avif"
            alt="bg-img"
            className="h-40 md:h-52 lg:h-72 absolute right-1 lg:right-20 top-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
