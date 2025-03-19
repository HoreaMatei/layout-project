import React from "react";
import Title from "../components/Title";
import clsx from "clsx";
import MovingTextComponent from "../components/MovingTextComponent";
import ContactComponent from "../components/ContactComponent";
import { useParams } from "react-router-dom";
import { li } from "framer-motion/client";

type PageData = {
  id: string; // Unique ID for each page
  title: string;
  image1: string;
  image2: string;
  objective: string;
  description: string;

  points: string[];
  creativeProcess: string[];
  results: string;
  conclusion: string;
  subTitle: string;
  leftText: string;
  rightText: string;
};

const data: PageData[] = [
  {
    leftText: "UI, UX, Development",
    rightText: "CSS Award",
    id: "creative-pulse1",

    title: "Creative pulse",
    image1: "/pagesImages/bluehead.avif",
    image2: "/pagesImages/bluehead2.avif",
    subTitle: "What we've done",
    objective:
      "To design an illustration for a small business that accurately represents their brand and appeals to their target audience.",

    description:
      "Webflow is a Berlin-based Series A startup on its way to becoming the leading finance platform for SMEs, freelancers, and self-employed persons.",
    points: [
      "Strategic Discovery",
      "Web application redesign & optimization",
      "Mobile application redesign & optimization",
      "Landing page redesign & optimization",
      "Component-based UI-kit",
      "Product Design Sprints to explore new functionality",
    ],
    creativeProcess: [
      "Research: Conducted research on the business's values, competitors, and target audience.",
      "Sketching: Sketched several logo concepts to explore different design directions.",
      "Digital Design: Created several digital designs using Adobe Illustrator.",
      "Refinement: Refined the chosen design based on client feedback.",
      "Finalization: Delivered the final logo design in various file formats for digital and print use.",
    ],
    results:
      "The new logo accurately represented the brand's values and appealed to their target audience. The business reported increased website traffic and social media engagement, and the logo was featured in several local publications.",
    conclusion:
      "Through careful research and a collaborative design process, I was able to create a unique and effective logo design that met the client's objectives and helped them achieve their business goals.",
  },
  {
    leftText: "Logo, User Interface",
    rightText: "Awwwards",
    id: "design-surge",
    title: "Design Surge",
    image1: "/pagesImages/designSurge1.avif",
    image2: "/pagesImages/designSurge2.avif",
    subTitle: "What we've done",
    objective:
      "To design an illustration for a small business that accurately represents their brand and appeals to their target audience.",

    description:
      "Webflow is a Berlin-based Series A startup on its way to becoming the leading finance platform for SMEs, freelancers, and self-employed persons.",
    points: [
      "Strategic Discovery",
      "Web application redesign & optimization",
      "Mobile application redesign & optimization",
      "Landing page redesign & optimization",
      "Component-based UI-kit",
      "Product Design Sprints to explore new functionality",
    ],
    creativeProcess: [
      "Research: Conducted research on the business's values, competitors, and target audience.",
      "Sketching: Sketched several logo concepts to explore different design directions.",
      "Digital Design: Created several digital designs using Adobe Illustrator.",
      "Refinement: Refined the chosen design based on client feedback.",
      "Finalization: Delivered the final logo design in various file formats for digital and print use.",
    ],
    results:
      "The new logo accurately represented the brand's values and appealed to their target audience. The business reported increased website traffic and social media engagement, and the logo was featured in several local publications.",
    conclusion:
      "Through careful research and a collaborative design process, I was able to create a unique and effective logo design that met the client's objectives and helped them achieve their business goals.",
  },
  {
    leftText: "UI, UX, Development",
    rightText: "CSS Award",
    id: "vision-craft",
    title: "Vision Craft",
    image1: "/pagesImages/visionCraft1.avif",
    image2: "/pagesImages/visionCraft2.avif",
    subTitle: "What we've done",
    objective:
      "To design an illustration for a small business that accurately represents their brand and appeals to their target audience.",

    description:
      "Webflow is a Berlin-based Series A startup on its way to becoming the leading finance platform for SMEs, freelancers, and self-employed persons.",
    points: [
      "Strategic Discovery",
      "Web application redesign & optimization",
      "Mobile application redesign & optimization",
      "Landing page redesign & optimization",
      "Component-based UI-kit",
      "Product Design Sprints to explore new functionality",
    ],
    creativeProcess: [
      "Research: Conducted research on the business's values, competitors, and target audience.",
      "Sketching: Sketched several logo concepts to explore different design directions.",
      "Digital Design: Created several digital designs using Adobe Illustrator.",
      "Refinement: Refined the chosen design based on client feedback.",
      "Finalization: Delivered the final logo design in various file formats for digital and print use.",
    ],
    results:
      "The new logo accurately represented the brand's values and appealed to their target audience. The business reported increased website traffic and social media engagement, and the logo was featured in several local publications.",
    conclusion:
      "Through careful research and a collaborative design process, I was able to create a unique and effective logo design that met the client's objectives and helped them achieve their business goals.",
  },

  {
    leftText: "UI, UX, Development",
    rightText: "CSS Award",
    id: "brand-bloom",
    title: "Brand Bloom",
    image1: "/pagesImages/brandBloom1.avif",
    image2: "/pagesImages/brandBloom2.avif",
    subTitle: "What we've done",
    objective:
      "To design an illustration for a small business that accurately represents their brand and appeals to their target audience.",

    description:
      "Webflow is a Berlin-based Series A startup on its way to becoming the leading finance platform for SMEs, freelancers, and self-employed persons.",
    points: [
      "Strategic Discovery",
      "Web application redesign & optimization",
      "Mobile application redesign & optimization",
      "Landing page redesign & optimization",
      "Component-based UI-kit",
      "Product Design Sprints to explore new functionality",
    ],
    creativeProcess: [
      "Research: Conducted research on the business's values, competitors, and target audience.",
      "Sketching: Sketched several logo concepts to explore different design directions.",
      "Digital Design: Created several digital designs using Adobe Illustrator.",
      "Refinement: Refined the chosen design based on client feedback.",
      "Finalization: Delivered the final logo design in various file formats for digital and print use.",
    ],
    results:
      "The new logo accurately represented the brand's values and appealed to their target audience. The business reported increased website traffic and social media engagement, and the logo was featured in several local publications.",
    conclusion:
      "Through careful research and a collaborative design process, I was able to create a unique and effective logo design that met the client's objectives and helped them achieve their business goals.",
  },

  {
    leftText: "Font, User Interface",
    rightText: "CSS Award",
    id: "impact-edge",
    title: "impact edge",
    image1: "/pagesImages/impactEdge1.avif",
    image2: "/pagesImages/impactEdge2.avif",
    subTitle: "What we've done",
    objective:
      "To design an illustration for a small business that accurately represents their brand and appeals to their target audience.",

    description:
      "Webflow is a Berlin-based Series A startup on its way to becoming the leading finance platform for SMEs, freelancers, and self-employed persons.",
    points: [
      "Strategic Discovery",
      "Web application redesign & optimization",
      "Mobile application redesign & optimization",
      "Landing page redesign & optimization",
      "Component-based UI-kit",
      "Product Design Sprints to explore new functionality",
    ],
    creativeProcess: [
      "Research: Conducted research on the business's values, competitors, and target audience.",
      "Sketching: Sketched several logo concepts to explore different design directions.",
      "Digital Design: Created several digital designs using Adobe Illustrator.",
      "Refinement: Refined the chosen design based on client feedback.",
      "Finalization: Delivered the final logo design in various file formats for digital and print use.",
    ],
    results:
      "The new logo accurately represented the brand's values and appealed to their target audience. The business reported increased website traffic and social media engagement, and the logo was featured in several local publications.",
    conclusion:
      "Through careful research and a collaborative design process, I was able to create a unique and effective logo design that met the client's objectives and helped them achieve their business goals.",
  },
];

const DynamicProjectsPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const pageData = data.find((item) => item.id === pageId);

  if (!pageData)
    return <h1 className="text-center text-red-500">Page Not Found</h1>;

  return (
    <div className="text-white tracking-wider">
      <Title className="lg:text-[26vh] h-[50vh]" text="Creative Pulse" />

      <div className="bg-black w-screen relative pt-3">
        <div
          style={{
            backgroundImage: `url(${pageData.image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className={clsx(
            " brightness-75 w-[90vw] h-[70vh] text-white flex justify-center flex-col align-middle items-center gap-8 m-auto mt-4    relative"
          )}
        >
          <p className="absolute left-10 top-10 text-xl">{pageData.leftText}</p>
          <p className="absolute top-10 text-xl right-10">
            {pageData.rightText}{" "}
          </p>
        </div>
      </div>
      <div className="w-screen bg-black relative  ">
        <div className="w-[35vw] flex flex-col gap-20 h-[80vh] justify-center relative bg-black m-auto">
          <div className="flex flex-col gap-5 text-xl">
            <div className="text-2xl">Objective</div>
            <p>{pageData.objective}</p> <p>{pageData.description}</p>
          </div>
          <div className=" text-xl flex flex-col gap-4">
            <h1 className="text-2xl">What we've done</h1>
            <ol className="list-decimal list-inside space-y-4">
              {pageData.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="w-screen h-[80vh] pb-28 pt-10 bg-black relative ">
        <div
          style={{
            backgroundImage: `url(${pageData.image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className={clsx(
            "brightness-75 w-[90vw] h-[70vh]  text-white flex justify-center flex-col align-middle items-center gap-8 m-auto mt-4    relative"
          )}
        ></div>
      </div>

      <div className="w-screen bg-black relative ">
        <div className="pt-20  w-[35vw] flex flex-col gap-10 h-[80vh] justify-center relative bg-black m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl ">Creative Process</h1>
            <ol className="list-decimal list-inside space-y-4 text-xl">
              {pageData.creativeProcess.map((process, i) => (
                <li key={i}>{process}</li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl ">Results</h1>
            <p className="text-xl">{pageData.results}</p>
          </div>
          <div className="flex flex-col gap4">
            <h1 className="text-3xl">Conclusion</h1>
            <p className="text-xl">{pageData.conclusion}</p>
          </div>
        </div>
      </div>

      <div className="pt-40 relative bg-black">
        <MovingTextComponent />
      </div>

      <div className="pt-10 relative bg-black">
        <ContactComponent />
      </div>
    </div>
  );
};

export default DynamicProjectsPage;
