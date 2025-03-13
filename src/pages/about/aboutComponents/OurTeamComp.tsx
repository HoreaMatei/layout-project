import React from "react";
import SlidingTextComponent from "../../../components/SlidingTextComponent";
import Button from "../../../components/Button";

const OurTeamComp: React.FC = () => {
  return (
    <div className="flex flex-col h-[90vh]">
      <SlidingTextComponent />
      <Button text="join us" className="m-auto " />
    </div>
  );
};

export default OurTeamComp;
