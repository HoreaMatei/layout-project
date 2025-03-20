import React from "react";
import Title from "../../components/Title";
import MovingTextComponent from "../../components/MovingTextComponent";
import ContactComponent from "../../components/ContactComponent";

const GrowthPackage: React.FC = () => {
  return (
    <div>
      <Title className="h-[38vh] z-40 text-[26vh]" text="growth package" />

      <div className="w-screen relative tracking-wider bg-black pt-40 h-[100vh]">
        <div className="w-[90vw] border-[0.4px] border-stone-700 p-10 m-auto h-[66vh]">
          <div className="border-b-[0.4px] flex flex-col gap-6 pb-10 w-[100%] border-stone-700">
            <h1 className="text-2xl uppercase">growth package</h1>
            <p className="text-xl text-stone-400">
              Designed for businesses that need more functionality and
              customization as they grow.
            </p>
            <h1 className="text-2xl">$2500 USD</h1>
          </div>

          <div className="mt-5 border-b-[0.4px] border-stone-700 flex flex-col gap-5 w-[100%] pb-10">
            <h2 className="text-xl">What's Included</h2>
            <ul className="flex flex-col gap-1 text-stone-400 pl-5">
              <li>Custom Website</li>
              <li>Advanced SEO</li>
              <li>Integration of CMS</li>
              <li>Custom graphics</li>
              <li>Social media feed integration</li>
              <li>Google Analytics</li>
            </ul>
          </div>
          <button className="hover:brightness-80 cursor-pointer bg-blue-700 w-[100%] h-12 text-lg mt-10">
            GET STARTED
          </button>
        </div>
      </div>

      <MovingTextComponent />
      <ContactComponent />
    </div>
  );
};

export default GrowthPackage;
