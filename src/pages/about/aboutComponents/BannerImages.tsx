import React from "react";

const BannerImages: React.FC = () => {
  return (
    <div className="flex flex-row gap-7 mt-40">
      <img
        className="  h-[40vh] w-[68vw] object-cover"
        src="/about/comp.avif"
        alt="computer"
      />

      <img
        src="/about/blue2.avif"
        alt="blue bg"
        className="h-[40vh] w-[48vw] object-cover"
      />
    </div>
  );
};

export default BannerImages;
