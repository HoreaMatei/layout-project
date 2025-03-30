const HeaderImagesDiv = () => {
  return (
    <div>
      <img
        src="./redbg.avif"
        className="absolute top-16 left-10  lg:left-94 z-10 w-[38vw] lg:w-[16vw] lg:h-[19vw]  object-cover "
        alt="pic"
      />
      <img
        src="./bgpic1.avif"
        className="absolute z-10 top-0 sm:top-50 right-1 sm:right-46 w-[30vw] sm:w-[11vw]"
        alt="pic"
      />
      <img
        src="./bgpic2.avif"
        alt="pic"
        className=" left-0 h-30 w-30  sm:w-[22vw] sm:h-[25vw] absolute  sm:left-16 "
      />
      <img
        src="./bgpic3.avif"
        alt="pic"
        className="absolute right-4 top-60 sm:right-110 w-[40vw] sm:w-[15vw] h-[30vh] sm:h-[38vh] sm:top-160"
      />
    </div>
  );
};

export default HeaderImagesDiv;
