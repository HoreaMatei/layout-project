import React from "react";

const ImgAndNumbersComp: React.FC = () => {
  return (
    <div className=" mt-1 sm:mt-30 w-screen sm:w-[64vw] flex flex-col sm:flex-row m-auto justify-around pt-10">
      <img
        src="/about/bluebg.avif"
        alt="blue glasses"
        className=" mt-5 w-[90%] m-auto sm:w-[24vw] sm:h-[24vw]"
      />
      <div className=" pl-4 pt-6 sm:pt-0 sm:pl-0">
        <p className="text-stone-400 text-xl">Numbers</p>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col relative">
            <div className="">
              <h1 className=" text-8xl sm:text-[24vh] tracking-tighter  leading-none">
                1.450{" "}
                <span className="text-6xl sm:text-[12vh] absolute top-0 sm:top-5 ">
                  +
                </span>
              </h1>
            </div>
            <p>Clients Worldwide</p>
          </div>
          <div className="flex flex-col relative ">
            <h1 className="text-8xl sm:text-[22vh]tracking-tighter leading-none">
              17 <span className="text-[12vh] absolute top-0 sm:top-5 ">+</span>
            </h1>
            <p className="">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgAndNumbersComp;
