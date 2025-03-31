const mediaArray = ["media Strategy", "video", "engaging", "storytelling"];

const MediaComponent: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {mediaArray.map((element) => (
        <div className="text-white capitalize bg-stone-700 w-fit  text-[16px] p-2 pl-5 opacity-90 pr-5">
          {element}
        </div>
      ))}
    </div>
  );
};

export default MediaComponent;
