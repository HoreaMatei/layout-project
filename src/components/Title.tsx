import React from "react";

const Title: React.FC = () => {
  return (
    <div className="sticky top-0">
      <div className="">
        <div className="relative flex ">
          <h1 className="text-[48vh] tracking-tighter  m-auto mt-10">ABOUT</h1>
          <img
            src="/bgpic1.avif"
            alt="bg-img"
            className="h-72 absolute right-20 top-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
