import React from "react";
import Title from "../../components/Title";
import MissionAndVisionComp from "./aboutComponents/MissionAndVisionComp";
import ImgAndNumbersComp from "./aboutComponents/ImgAndNumbersComp";
import ClientsComp from "./aboutComponents/ClientsComp";
import BannerImages from "./aboutComponents/BannerImages";
import SlidingTextComponent from "../../components/SlidingTextComponent";
import OurTeamComp from "./aboutComponents/OurTeamComp";
import MovingTextComponent from "../../components/MovingTextComponent";
import ContactComponent from "../../components/ContactComponent";

const About: React.FC = () => {
  return (
    <div>
      <Title text="about" />
      <div
        className="
      pt-40 w-screen relative h-[100vh] bg-black z-10"
      >
        <MissionAndVisionComp />

        <ImgAndNumbersComp />
        <ClientsComp />
        <BannerImages />
        <OurTeamComp />
        <div className="mt-50 mb-10">
          <MovingTextComponent />
        </div>

        <ContactComponent />
      </div>
    </div>
  );
};

export default About;
