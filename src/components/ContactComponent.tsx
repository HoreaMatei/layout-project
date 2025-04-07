import "./ContactComp.css";
import React from "react";

// interface DataItem {
//   name: string;
//   link?: string;
// }

const DataArray = [
  {
    category: "Main",
    items: [
      { name: "Home", link: "/", target: "_self" },
      { name: "Work", link: "/works", target: "_self" },
      { name: "About", link: "/about", target: "_self" },
      { name: "Blog", link: "/blogs", target: "_self" },
      { name: "Plans", link: "/plans", target: "_self" },
    ],
  },
  {
    category: "Legal",
    items: [
      { name: "Style Guide", link: "/style", target: "_self" },
      { name: "Licensing", link: "/licensing", target: "_self" },
      { name: "Changelog", link: "/changelog", target: "_self" },
    ],
  },
  {
    category: "Social",
    items: [
      {
        name: "Instagram",
        link: "https://www.instagram.com",
        target: "_blank",
      },
      { name: "LinkedIn", link: "https://www.linkedin.com", target: "_blank" },
      { name: "Dribbble", link: "https://dribbble.com", target: "_blank" },
      { name: "Behance", link: "https://www.behance.net", target: "_blank" },
      { name: "Facebook", link: "https://www.facebook.com", target: "_blank" },
    ],
  },
];

const ContactComponent: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row tracking-wider ">
      <div className=" w-[100vw] p-10 flex flex-col sm:flex-row">
        <div className="flex flex-col sm:flex-row w-[20vw] sm:m-auto gap-5 sm:gap-20 ">
          {DataArray.map((group, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <h1 className="text-2xl text-stone-500 mb-4">{group.category}</h1>
              {group.items.map((item, subIndex) => (
                <a
                  target={item.target}
                  href={item.link ?? "#"}
                  key={subIndex}
                  className="relative  text-lg sm:text-2xl group whitespace-nowrap cursor-pointer  "
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          ))}
        </div>
        <a
          className="lg:w-[20vw] text-2xl sm:text-4xl mt-5 sm:mt-0 m-auto"
          href="#"
        >
          Back to Top
        </a>{" "}
      </div>
    </div>
  );
};

export default ContactComponent;
