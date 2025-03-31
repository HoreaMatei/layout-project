import React from "react";
import Title from "../../components/Title";
import MissionAndVisionComp from "./aboutComponents/MissionAndVisionComp";
import ImgAndNumbersComp from "./aboutComponents/ImgAndNumbersComp";
import ClientsComp from "./aboutComponents/ClientsComp";
import BannerImages from "./aboutComponents/BannerImages";

import OurTeamComp from "./aboutComponents/OurTeamComp";
import MovingTextComponent from "../../components/MovingTextComponent";
import ContactComponent from "../../components/ContactComponent";

const About: React.FC = () => {
  return (
    <div>
      <Title className="text-[28vw] z-20  h-[30vh] sm:h-[90vh]" text="about" />
      <div
        className="
      pt-10 sm:pt-40 w-screen relative h-[50vh] sm:h-[100vh] bg-black z-10"
      >
        <MissionAndVisionComp />

        <ImgAndNumbersComp />
        <ClientsComp />
        <BannerImages />
        <div className="relative">
          <OurTeamComp />
        </div>
        <div className="relative">
          <div className=" mt-0 sm:mt-50 mb-10 bg-black relative">
            <MovingTextComponent />
          </div>

          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default About;
