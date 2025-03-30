import React from "react";
import MembersSocialMediaLinks from "./MembersSocialMediaLinks";

const teamMembers = [
  { name: "Noah Bennett", role: "Founder", imgUrl: "/about/team/head2.avif" },
  {
    name: "Emma Lawson",
    role: "Creative Director",
    imgUrl: "/about/team/head1.avif",
  },
  { name: "Ethan Reyes", role: "Developer", imgUrl: "/about/team/head4.avif" },
  {
    name: "Olivia Turner",
    role: "Brand Strategist",
    imgUrl: "/about/team/head3.avif",
  },
];

const HeadShotsComp: React.FC = () => {
  return (
    <div className=" relative w-[95vw] flex-wrap sm:w-[80vw] flex flex-col sm:flex-row m-auto gap-4 mt-20  ">
      {teamMembers.map((member, index) => (
        <div className="flex flex-col gap-1 relative" key={index}>
          <img className="h-90" src={member.imgUrl} alt="headshot" />
          <p className="text-2xl">{member.name}</p>
          <p className="text-stone-400 text-lg">{member.role}</p>
          <MembersSocialMediaLinks />
        </div>
      ))}
    </div>
  );
};

export default HeadShotsComp;
