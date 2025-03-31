import clsx from "clsx";
import Banner from "../components/Banner";
import { BannerProvider } from "../hooks/useBannerContext";

export const bannersData = [
  {
    title: "Creative Pulse",
    leftText: "UI, UX, Development",
    rightText: "CSS Award",
    buttonText: "View More",
    image: "/bannerImages/bigBg1.avif",
    linkTo: "projects/creative-pulse1",
  },
  {
    title: "Design Surge",
    leftText: "Logo, User Interface",
    rightText: "Awwwards",
    buttonText: "View More",
    image: "/bannerImages/bigBg2.avif",
    linkTo: "projects/design-surge",
  },
  {
    title: "Vision Craft",
    leftText: "Logo, User Interface",
    rightText: "Awwwards",
    buttonText: "View More",
    image: "/bannerImages/bigBg3.avif",
    linkTo: "projects/vision-craft",
  },
  {
    title: "Brand Bloom",
    leftText: "UI, UX, Development",
    rightText: "CSS Award",
    buttonText: "View More",
    image: "/bannerImages/bigBg4.avif",
    linkTo: "projects/brand-bloom",
  },
  {
    title: "Impact Edge",
    leftText: "Font, User Interface",
    rightText: "CSS Award",
    buttonText: "View More",
    image: "/bannerImages/bigBg5.avif",
    linkTo: "projects/impact-edge",
  },
];

interface BannerSectionProps {
  subClassName: string;
  className: string;
}

const BannersSection: React.FC<BannerSectionProps> = ({
  subClassName,
  className,
}) => {
  return (
    <div
      className={clsx(" mt-20 sm:mt-0 z-40 text-center relative  ", className)}
    >
      {bannersData.map((banner, index) => (
        <BannerProvider key={index} value={banner}>
          <Banner className={subClassName} />
        </BannerProvider>
      ))}
    </div>
  );
};

export default BannersSection;
