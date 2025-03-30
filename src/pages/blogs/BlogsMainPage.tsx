import React from "react";
import Title from "../../components/Title";
import { InsightProvider } from "../../hooks/useInsightContext";
import InsightsComponent from "../../components/InsightsComponent";

const articles = [
  {
    imgUrl: "/insights/phone.avif",
    date: "October 8, 2023",
    readTime: "5 min read",
    linkTo: "/blogs/online-community",
    title: "Building an Online Community",
  },
  {
    imgUrl: "/insights/box.avif",
    date: "October 6, 2023",
    readTime: "3 min read",
    title: "Content Marketing Strategies",
    linkTo: "/blogs/content-marketing",
  },
  {
    imgUrl: "/insights/bag.avif",
    date: "October 4, 2023",
    readTime: "5 min read",
    title: "Social Media Marketing Tips",
    linkTo: "/blogs/marketing-tips",
  },

  {
    imgUrl: "/blogs/bestPractices1.avif",
    date: "October 2, 2023",
    readTime: "4 min read",
    title: "Best Practices for Blogging",
    linkTo: "/blogs/best-practices",
  },
  {
    imgUrl: "/blogs/undr1.avif",
    date: "October 1, 2023",
    readTime: "5 min read",
    title: "Understanding Webflow CMS",
    linkTo: "/blogs/weblfow-cms",
  },
  {
    imgUrl: "/blogs/seo1.avif",
    date: "October 3, 2023",
    readTime: "3 min read",
    title: "SEO Strategies for 2024",
    linkTo: "/blogs/seo",
  },
];

const BlogsMainPage = () => {
  return (
    <div>
      <Title text="blogs" className="text-[50vh] h-[90vh]" />
      <div className="w-screen bg-black relative pt-40">
        <div className="w-[82vw] flex m-auto flex-wrap gap-5 ">
          {articles.map((article, index) => (
            <InsightProvider key={index} value={article}>
              <InsightsComponent />
            </InsightProvider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsMainPage;
