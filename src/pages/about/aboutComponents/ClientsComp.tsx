import React from "react";
import AnimatedImageGrid from "../../../components/AnimatedImageGrid";

const ClientsComp: React.FC = () => {
  return (
    <div className="flex flex-row w-[70vw] m-auto justify-around  mt-40">
      <p className="text-stone-400"> Our clients</p>

      <div className="mt-10">
        <AnimatedImageGrid />
      </div>
    </div>
  );
};

export default ClientsComp;
