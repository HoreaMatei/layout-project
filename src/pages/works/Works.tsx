import React from "react";
import Title from "../../components/Title";

import MovingTextComponent from "../../components/MovingTextComponent";
import ContactComponent from "../../components/ContactComponent";
import BannersSectionWorks from "../../sections/BnnerSectionWorks";

const Works: React.FC = () => {
  return (
    <div className="">
      <Title className="text-[28vw] z-20  h-[30vh] sm:h-[90vh]" text="works" />

      <div className="relative  bg-black">
        <div className="relative w-screen bg-black pt-5 sm:pt-40">
          <BannersSectionWorks
            subClassName="w-[90vw]  sm:w-[38vw] h-[70vh] "
            className="w-screen  sm:w-[78vw]   m-auto flex flex-col sm:grid grid-cols-2 "
          />
        </div>

        <div className="lg:pt-40 mb-10 bg-black relative">
          <MovingTextComponent />
        </div>

        <div className="pt-5 mt-0 relative bg-black">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default Works;
