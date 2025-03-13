import "./ContactComp.css";
import React from "react";

interface DataItem {
  name: string;
}

interface DataGroup {
  category: string;
  items: DataItem[];
}

const DataArray = [
  {
    category: "Main",
    items: [
      { name: "Home" },
      { name: "Work" },
      { name: "About" },
      { name: "Blog" },
      { name: "Plans" },
    ],
  },
  {
    category: "Legal",
    items: [
      { name: "Style Guide" },
      { name: "Licensing" },
      { name: "Changelog" },
    ],
  },
  {
    category: "Social",
    items: [
      { name: "Instagram" },
      { name: "LinkedIn" },
      { name: "Dribbble" },
      { name: "Behance" },
      { name: "Facebook" },
    ],
  },
];

const ContactComponent: React.FC = () => {
  return (
    <div className="flex flex-row ">
      <div className=" w-[100vw] p-10 flex flex-row">
        <div className="flex flex-row w-[20vw] m-auto gap-20 ">
          {DataArray.map((group, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <h1 className="text-2xl text-stone-500 mb-4">{group.category}</h1>
              {group.items.map((item, subIndex) => (
                // <div className="group ">
                //   <p className="text-2xl underline1 group" key={subIndex}>
                //     {item.name}
                //     <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                //   </p>
                // </div>
                <p
                  key={subIndex}
                  className="relative text-2xl group whitespace-nowrap cursor-pointer  "
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </p>
              ))}
            </div>
          ))}
        </div>
        <a className="lg:w-[20vw] text-4xl m-auto" href="#">
          Back to Top
        </a>{" "}
      </div>
    </div>
  );
};

export default ContactComponent;
