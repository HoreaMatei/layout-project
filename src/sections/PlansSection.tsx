import Plan from "../components/Plan";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const plansImagesArray = [
  "/plans/plan1.avif",
  "/plans/plan2.avif",
  "/plans/plan3.avif",
];

const PlansSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const planFade = useTransform(
    scrollYProgress,

    [0.5, 0.9],
    ["40%", "-10%"]
  );

  return (
    <div className="lg:mt-40">
      {plansImagesArray.map((imgUrl, index) => (
        <div>
          <Plan key={index} imgUrl={imgUrl} index={index} />
        </div>
      ))}
    </div>
  );
};

export default PlansSection;
