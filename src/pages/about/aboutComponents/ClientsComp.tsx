import React from "react";
import AnimatedImageGrid from "../../../components/AnimatedImageGrid";

const ClientsComp: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row w-[90vw] sm:w-[70vw] m-auto justify-around  mt-40">
      <p className="text-stone-400 text-2xl"> Our clients</p>

      <div className="mt-10">
        <AnimatedImageGrid />
      </div>
    </div>
  );
};

export default ClientsComp;
