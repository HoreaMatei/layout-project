import clsx from "clsx";
import { useBanner } from "../hooks/useBannerContext";
import Button from "./Button";

interface BannerProps {
  className?: string;
}

const WorksBanner: React.FC<BannerProps> = ({ className }) => {
  const { title, leftText, rightText, buttonText, image, linkTo } = useBanner();
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={clsx(
        "bg-local text-white flex justify-center flex-col align-middle items-center gap-8 m-auto mt-4    relative",
        className
      )}
    >
      <p className="absolute left-10 top-10 text-xl">{leftText}</p>
      <p className="absolute top-10 text-xl right-10">{rightText} </p>
      <p className="uppercase text-8xl mt-10">{title} </p>
      <Button linkTo={linkTo} text={buttonText} className="absolute" />
    </div>
  );
};

export default WorksBanner;
