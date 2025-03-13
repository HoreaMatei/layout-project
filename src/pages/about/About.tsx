import React from "react";
import Title from "../../components/Title";
import MissionAndVisionComp from "./aboutComponents/MissionAndVisionComp";
import ImgAndNumbersComp from "./aboutComponents/ImgAndNumbersComp";
import ClientsComp from "./aboutComponents/ClientsComp";
import BannerImages from "./aboutComponents/BannerImages";
import SlidingTextComponent from "../../components/SlidingTextComponent";
import OurTeamComp from "./aboutComponents/OurTeamComp";

const About: React.FC = () => {
  return (
    <div>
      <Title />
      <div
        className="
      pt-40 w-screen relative h-[100vh] bg-black z-10"
      >
        <MissionAndVisionComp />

        <ImgAndNumbersComp />
        <ClientsComp />
        <BannerImages />
        <OurTeamComp />
      </div>
    </div>
  );
};

export default About;
