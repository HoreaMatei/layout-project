import React from "react";
import SlidingTextComponent from "../../../components/SlidingTextComponent";
import Button from "../../../components/Button";
import HeadShotsComp from "./HeadShotsComp";

const OurTeamComp: React.FC = () => {
  return (
    <div className="flex flex-col h-[90vh] mt-40  ">
      <SlidingTextComponent
        text="  Our team excels in creating designs that speak directly to the
          audience’s needs."
      />
      <div className="w-[20vw] m-auto flex items-center mt-10">
        <Button text="join us" className="m-auto " />
      </div>
      <HeadShotsComp />
    </div>
  );
};

export default OurTeamComp;
