import Button from "./Button";
import MediaComponent from "./MediaComponent";

interface PlanProps {
  imgUrl: string;
  index: number;
}

const Plan: React.FC<PlanProps> = ({ imgUrl, index }) => {
  return (
    <div
      className={`flex flex-wrap  ${
        index % 2 === 0 ? "  sm:flex-row  " : " sm:flex-row-reverse"
      }  text-white w-[95vw] sm:w-[92vw] m-auto h-fit ms:h-[80vh] bg-stone-900`}
    >
      <div
        className=" w-screen sm:w-[50%]  h-[50vh] sm:h-[80vh] bg-cover bg-center "
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="w-screen sm:w-[50%] h-[400px] sm:h-[80vh] flex ">
        <div className=" sm:w-[80%] m-auto h-fit sm:h-[70%] flex flex-col justify-between  ">
          <div className="flex flex-col w-[80vw] m-auto h-[60%] sm:h-[55%] justify-between gap-5">
            <h1 className="uppercase text-5xl sm:text-8xl">Strategy</h1>
            <p className="text-xl sm:text-3xl w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <MediaComponent />
          </div>

          <Button
            linkTo="/plans"
            text="explore plans"
            className="w-[200px] mt-10 sm:mt-0 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
