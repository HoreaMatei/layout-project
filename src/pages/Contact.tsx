import React from "react";
import Title from "../components/Title";
import MultiStepForm from "../components/MultiStepForm";
import MovingTextComponent from "../components/MovingTextComponent";
import ContactComponent from "../components/ContactComponent";

const Contact: React.FC = () => {
  return (
    <div>
      <Title className="h-[90vh] text-[50vh] z-20" text="Contact" />

      <div className=" mb-20 relative w-screen bg-black pt-30">
        <div className="flex flex-row w-[70vw] m-auto">
          <div className="flex flex-col gap-5 w-[300px]">
            <h1 className="text-xl text-stone-500">Find Us</h1>
            <p className="text-xl ">
              1701 Pine Street, San Francisco, CA 94115, US
            </p>
            <h1 className="text-xl text-stone-500">Inquiry</h1>
            <p className="text-3xl">
              contact@line.io
              <br />
              <br />
              +1 800 - 1236 789
            </p>
          </div>

          <MultiStepForm />
        </div>
        <div className="lg:mt-40">
          <MovingTextComponent />
        </div>
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;
