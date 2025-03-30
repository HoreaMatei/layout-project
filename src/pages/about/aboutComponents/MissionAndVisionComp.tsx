import React from "react";

const MissionAndVisionComp: React.FC = () => {
  return (
    <div className="flex relative flex-col sm:flex-row z-10 w-[80vw] m-auto justify-around">
      <div className=" w-[80vw] sm:w-[30vw] ">
        <p className="text-xl text-stone-500">Mission and Vision</p>
      </div>
      <div className=" w-[80vw] sm:w-[36vw] text-xl mt-4 sm:mt-0 sm:text-4xl">
        <p className="">
          <span className="text-stone-500">Line Studio®</span> is a versatile
          creative studio specializing in Branding, Web Design, and Development.
        </p>
        <br />
        <p className="">
          We empower clients to elevate their brands, expand their reach, and
          distinguish themselves in their industry through impactful solutions
          and innovative design.
        </p>
      </div>
    </div>
  );
};

export default MissionAndVisionComp;
