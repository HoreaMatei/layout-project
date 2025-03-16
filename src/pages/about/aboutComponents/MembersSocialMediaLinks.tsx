import { img } from "framer-motion/client";
import React from "react";

const socialMediaIcons = [
  "/socialMedia/x.avif",
  "/socialMedia/linkedin.avif",
  "/socialMedia/insta.avif",
  "/socialMedia/social.avif",
];

const MembersSocialMediaLinks: React.FC = () => {
  return (
    <div className="flex flex-row gap-3 mt-2">
      {socialMediaIcons.map((iconUrl, index) => (
        <div
          key={index}
          className=" relative h-[24px] w-[24px] overflow-hidden cursor-pointer  "
        >
          <div className="flex absolute left-1 top-1 transition-transform duration-400 hover:-translate-x-7 flex-row w-50px] gap-2 m-0 ">
            <img
              className="h-[18px] invert brightness-200"
              src={iconUrl}
              key={index}
              alt="media icon"
            />
            <img
              className="h-[18px] invert brightness-200"
              src={iconUrl}
              key={index}
              alt="media icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersSocialMediaLinks;
