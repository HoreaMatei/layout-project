import React from "react";
import Button from "../components/Button";

import { InsightProvider } from "../hooks/useInsightContext";
import InsightsComponent from "../components/InsightsComponent";

const articles = [
  {
    imgUrl: "/insights/phone.avif",
    date: "October 8, 2023",
    readTime: "5 min read",
    title: "Building an Online Community",
  },
  {
    imgUrl: "/insights/box.avif",
    date: "October 6, 2023",
    readTime: "3 min read",
    title: "Content Marketing Strategies",
  },
  {
    imgUrl: "/insights/bag.avif",
    date: "October 4, 2023",
    readTime: "5 min read",
    title: "Social Media Marketing Tips",
  },
];

const LatestTipsSection: React.FC = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col mt-40  h-[70vh] gap-5 items-center">
        <p className="text-4xl text-center m-auto lg:w-[40vw] ">
          Discover the latest tips and insights to keep you ahead of the curve.
        </p>
        <div className=" flex flex-col items-center gap-20">
          <Button text="view all" className="mt-12 " />

          <div className="flex flex-row w-[82vw]">
            {articles.map((article, index) => (
              <InsightProvider key={index} value={article}>
                <InsightsComponent />
              </InsightProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestTipsSection;
