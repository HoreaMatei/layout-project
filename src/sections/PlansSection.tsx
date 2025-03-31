import Plan from "../components/Plan";

const plansImagesArray = [
  "/plans/plan1.avif",
  "/plans/plan2.avif",
  "/plans/plan3.avif",
];

const PlansSection: React.FC = () => {
  return (
    <div className="lg:mt-40 relative  ">
      {plansImagesArray.map((imgUrl, index) => (
        <div className="relative sm:sticky top-0">
          <Plan key={index} imgUrl={imgUrl} index={index} />
        </div>
      ))}
    </div>
  );
};

export default PlansSection;
