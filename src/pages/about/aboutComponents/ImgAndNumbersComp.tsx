import React from "react";

const ImgAndNumbersComp: React.FC = () => {
  return (
    <div className=" mt-30 w-[64vw] flex flex-row m-auto justify-around pt-10">
      <img
        src="/about/bluebg.avif"
        alt="blue glasses"
        className=" mt-5 w-[24vw] h-[24vw]"
      />
      <p className="text-stone-400 text-xl">Numbers</p>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col relative">
          <div className="">
            <h1 className="text-[24vh] tracking-tighter  leading-none">
              1.450 <span className="text-[12vh] absolute top-5 ">+</span>
            </h1>
          </div>
          <p>Clients Worldwide</p>
        </div>
        <div className="flex flex-col relative ">
          <h1 className="text-[22vh] tracking-tighter leading-none">
            17 <span className="text-[12vh] absolute top-5 ">+</span>
          </h1>
          <p className="">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default ImgAndNumbersComp;
