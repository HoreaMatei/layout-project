import { useBanner } from "../hooks/useBannerContext";
import Button from "./Button";

const Banner: React.FC = () => {
  const { title, leftText, rightText, buttonText, image } = useBanner();
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white w-[75vw] flex justify-center flex-col align-middle items-center gap-8 m-auto mt-4 bg-blue-400 h-[80vh]  relative"
    >
      <p className="absolute left-10 top-10 text-xl">{leftText}</p>
      <p className="absolute top-10 text-xl right-10">{rightText} </p>
      <p className="uppercase text-8xl mt-10">{title} </p>
      <Button text={buttonText} className="absolute" />
    </div>
  );
};

export default Banner;
