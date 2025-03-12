import React from "react";

const ArrowUpButton: React.FC = () => {
  return (
    <div className="cursor-pointer relative h-[40px] w-[40px] bg-blue-700 overflow-hidden p-3">
      <div className="flex absolute left-3 top-3 transition-transform duration-400 group-hover:-translate-x-9 flex-row w-50px] gap-5 m-0 ">
        <img
          src="/insights/arrowRight.png"
          alt="arrow"
          className="m-auto h-[16px]"
        />
        <img
          src="/insights/arrowRight.png"
          alt="arrow"
          className="m-auto h-[16px]"
        />
      </div>
    </div>
  );
};

export default ArrowUpButton;
