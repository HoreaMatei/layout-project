import React from "react";
import Title from "../../components/Title";

import MovingTextComponent from "../../components/MovingTextComponent";
import ContactComponent from "../../components/ContactComponent";

const packages = [
  {
    name: "Premium Package",
    description:
      "Ideal for growing businesses needing advanced features and enhanced functionality.",
    price: 3500,
    currency: "USD",
    features: [
      "Custom website design",
      "Advanced SEO optimization",
      "E-commerce functionality",
      "Custom branding",
      "Advanced web analytics",
      "Ongoing support",
    ],
  },
  {
    name: "Growth Package",
    description:
      "Designed for businesses that need more functionality and customization as they grow.",
    price: 2500,
    currency: "USD",
    features: [
      "Custom website",
      "Advanced SEO",
      "Integration of CMS",
      "Custom graphics",
      "Social media feed integration",
      "Google Analytics",
    ],
  },
  {
    name: "Starter Package",
    description:
      "Perfect for small businesses or individuals looking to establish a strong online presence.",
    price: 1500,
    currency: "USD",
    features: [
      "Custom website design",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Integration of social media",
      "Fast-loading speed",
      "Contact form",
    ],
  },
];

const Plans: React.FC = () => {
  return (
    <div className="tracking-wider">
      <Title className="h-[90vh] text-[48vh]" text="Plans" />

      <div className="lg:w-screen pt-40  h-[100vh] bg-black relative">
        <div className=" w-[93vw] justify-between m-auto h-[92vh]  flex flex-row flex-wrap ">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className=" p-10 gap-10 flex flex-col lg:w-[30vw] border-[0.5px] border-stone-600 h-[80%]"
            >
              <div className="flex flex-col">
                <div className="pb-7 flex flex-col gap-5 border-b-[0.5px] border-stone-600">
                  <h1 className="text-3xl uppercase">{pkg.name} </h1>
                  <p className="text-xl text-stone-300">{pkg.description}</p>
                  <div className="text-3xl ">
                    ${pkg.price} {pkg.currency}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 pb-7 border-b-[0.5px] border-stone-600">
                <h1 className="text-lg">What's Included:</h1>
                <ul className="ml-5 text-lg text-stone-300">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col text-center items-center gap-5">
                <button className="h-12 uppercase text-xl hover:brightness-80 cursor-pointer bg-blue-700 w-[100%]">
                  get started
                </button>
                <a href="/growth-package" className="text-3xl">
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-20 relative bg-black">
        <MovingTextComponent />
        <ContactComponent />
      </div>
    </div>
  );
};

export default Plans;
