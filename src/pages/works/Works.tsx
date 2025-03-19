import React from "react";
import Title from "../../components/Title";
import BannersSection from "../../sections/BannersSection";
import MovingTextComponent from "../../components/MovingTextComponent";
import ContactComponent from "../../components/ContactComponent";

const Works: React.FC = () => {
  return (
    <div className="">
      <Title className="text-[48vh] h-[90vh]" text="works" />

      <div className="relative w-screen bg-black pt-40">
        <BannersSection
          subClassName="w-[38vw] h-[70vh] "
          className="w-[78vw]   m-auto grid grid-cols-2 "
        />
      </div>

      <div className="lg:pt-40 mb-10 bg-black relative">
        <MovingTextComponent />
      </div>

      <ContactComponent />
    </div>
  );
};

export default Works;
