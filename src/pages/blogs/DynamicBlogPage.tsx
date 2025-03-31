import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import MovingTextComponent from "../../components/MovingTextComponent";
import ContactComponent from "../../components/ContactComponent";
import { motion, useScroll, useTransform } from "framer-motion";

type PageData = {
  id: string; // Unique ID for each page
  image1: string;
  image2: string;
  title: string;
  image3: string;
};

const textData = {
  text1:
    "In the ever-evolving digital landscape, having a stunning website is no longer a luxury; it’s a necessity. Whether you’re a freelancer, creative agency, or a small business owner, your online presence can make or break your brand. Enter Webflow — the powerful, no-code website builder that empowers you to create visually captivating websites without needing to dive into the complexities of coding",
  header1: "Key benefits.",
  text2:
    "Gone are the days of wrestling with lines of code. With Webflow’s intuitive visual interface, you can drag and drop elements to design pixel-perfect websites. This means you can focus on creativity and user experience while Webflow automatically generates the clean, production-ready code for you.",
  text3:
    "In a world where users access the internet from various devices, ensuring that your website looks great everywhere is crucial. Webflow automatically creates responsive designs that adapt seamlessly across desktop, tablet, and mobile devices, so you can reach your audience no matter how they access your content.",
  text4:
    "Managing content can be a hassle, but not with Webflow! Their integrated CMS allows you to create custom content structures and manage your site’s content dynamically. Say goodbye to developer bottlenecks; you have full control to add, edit, and update content whenever you need.",
  text5:
    "Engagement is key in today’s web experience, and Webflow makes it easy to add sophisticated animations and interactions. From simple hover effects to complex scroll-triggered animations, you can create a dynamic and interactive user experience that keeps visitors engaged longer.",
  text6:
    "Webflow offers fast, reliable hosting that ensures your site is always up and running. With built-in SSL encryption and automated backups, you can focus on creating without worrying about the technical details. Webflow provides built-in SEO tools to help you optimize your website for search engines. Easily edit meta tags, create clean URLs, and generate XML sitemaps to ensure your site ranks higher on search engine results, driving organic traffic to your business.",
  header2: "Why should use Flowmance.",
  list: [
    "Ultrices cursus diam hendrerit ultrices. Et morbi quam at nunc ac urna.",
    "Maecenas libero, nibh volutpat, urna malesuada sodales. Duis orci posuere nisl sed sed morbi tortor.",
    "Libero aliquam arcu consectetur ornare pretium. Sit eget velit morbi turpis.",
  ],
  text7:
    "Ready to elevate your website game? With Webflow, the possibilities are endless. Whether you’re designing a portfolio, an online store, or a blog, you’ll have all the tools you need to create a beautiful, functional website that stands out from the competition.",
  text8:
    "Don’t let technical barriers hold you back—join the growing community of creatives using Webflow to bring their visions to life.",
  text9:
    " Start your journey with Webflow today and unlock the full potential of your online presence!",
  header3:
    "Where innovation meets insight, knowledge becomes the key to unlocking tomorrow's potential.",
  text10:
    "Enter Webflow — the powerful, no-code website builder that empowers you to create visually captivating websites without needing to dive into the complexities of coding.",
};

const data: PageData[] = [
  {
    id: "online-community",
    image1: "socialMedia1.avif",
    image2: "socialMedia2.avif",
    image3: "socialMedia3.jpeg",
    title: "Building an Online Community",
  },
  {
    id: "content-marketing",
    image1: "contentMarketing1.avif",
    image2: "contentMarketing2.avif",
    image3: "contentMarketing3.avif",
    title: "Content Marketing Strategies",
  },

  {
    id: "marketing-tips",
    image1: "marketingtips1.avif",
    image2: "marketingtips2.avif",
    image3: "marketingtips3.jpeg",
    title: "Social Media Marketing Tips",
  },

  {
    id: "seo",
    image1: "seo1.avif",
    image2: "seo2.avif",
    image3: "seo3.avif",
    title: "SEO Strategies for 2024",
  },

  {
    id: "weblfow-cms",
    image1: "undr1.avif",
    image2: "undr2.avif",
    image3: "undr3.avif",
    title: "Understanding Webflow CMS",
  },
  {
    id: "best-practices",
    image1: "bestPractices1.avif",
    image2: "bestPractice2.avif",
    image3: "bestPractice3.jpeg",
    title: "Best Practices for Blogging",
  },
];
const DynamicBlogPage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const fadeInTextx = useTransform(scrollYProgress, [0.6, 0.9], ["-1%", "30%"]);

  const { pageId } = useParams<{ pageId: string }>();
  const pageData = data.find((item) => item.id === pageId);

  if (!pageData)
    return <h1 className="text-center text-red-500">Page Not Found</h1>;

  return (
    <div className="text-white tracking-wider">
      <Title
        className="lg:text-[25vh] z-10 text-center"
        text={pageData.title}
      />
      <div className="bg-black w-screen relative pt-5 flex flex-col gap-5">
        <motion.section
          ref={targetRef}
          className=" lg:w-[95vw] lg:h-[75vh] m-auto overflow-hidden "
        >
          <motion.div
            style={{
              boxShadow: "-120px 0 70px rgba(0, 0, 0, 1)",
              y: fadeInTextx,
              // y: "-14%",
            }}
            className=" lg:w-[95vw] lg:h-[80vh]"
          >
            {" "}
            <img
              src={pageData.image1}
              alt="image-banner"
              className=" w-[97vw] h-[76vh] object-cover"
            />
          </motion.div>
        </motion.section>

        <div className="  flex flex-col gap-4 text-lg lg:w-[28vw] m-auto mt-20">
          <p>{textData.text1} </p>
          <h1 className="text-2xl uppercase">{textData.header1}</h1>
          <p>{textData.text2} </p>
          <p>{textData.text3} </p>
          <p>{textData.text4} </p>
          <p>{textData.text5} </p>
        </div>

        <div className=" lg:w-[75vw] lg:h-[140vh] m-auto overflow-hidden ">
          <img
            src={pageData.image2}
            alt="image-banner"
            className=" w-[97vw] h-[150vh] object-cover"
          />
        </div>

        <div className="mt-5 lg:w-[45vw] lg:h-[90vh] m-auto overflow-hidden ">
          <img
            src={pageData.image3}
            alt="image-banner"
            className=" w-[60vw] h-[92vh] object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 text-lg lg:w-[28vw] m-auto">
          <p>{textData.text6}</p>
          <h1 className="text-2xl uppercase">{textData.header2}</h1>
          <ul className="list-disc text-sm">
            {textData.list.map((listItem) => (
              <li>{listItem}</li>
            ))}
          </ul>
          <p>{textData.text7}</p>
          <p>{textData.text8}</p>
          <p>{textData.text9}</p>
          <h1 className="text-3xl uppercase border-l-2 pl-5 border-blue-700">
            {textData.header3}
          </h1>
          <p>{textData.text10}</p>
        </div>

        <div className="mt-30">
          <MovingTextComponent />
        </div>
        <div className="mb-10">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogPage;
