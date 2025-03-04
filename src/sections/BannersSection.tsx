import Banner from "../components/Banner";
import { BannerProvider } from "../hooks/useBannerContext";

const bannersData = [
  {
    title: "Creative Pulse",
    leftText: "UI, UX, Development",
    rightText: "CSS Award",
    buttonText: "View More",
    image: "/bannerImages/bigBg1.avif",
  },
  {
    title: "Design Surge",
    leftText: "Logo, User Interface",
    rightText: "Awwwards",
    buttonText: "View More",
    image: "/bannerImages/bigBg2.avif",
  },
  {
    title: "Vision Craft",
    leftText: "Logo, User Interface",
    rightText: "Awwwards",
    buttonText: "View More",
    image: "/bannerImages/bigBg3.avif",
  },
  {
    title: "Brand Bloom",
    leftText: "UI, UX, Development",
    rightText: "CSS Award",
    buttonText: "View More",
    image: "/bannerImages/bigBg4.avif",
  },
  {
    title: "Impact Edge",
    leftText: "Font, User Interface",
    rightText: "CSS Award",
    buttonText: "View More",
    image: "/bannerImages/bigBg5.avif",
  },
];

const BannersSection: React.FC = () => {
  return (
    <div className="w-[100vw] z-40 text-center ">
      {bannersData.map((banner, index) => (
        <BannerProvider key={index} value={banner}>
          <Banner />
        </BannerProvider>
      ))}
    </div>
  );
};

export default BannersSection;
