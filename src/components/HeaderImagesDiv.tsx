const HeaderImagesDiv = () => {
  return (
    <div>
      <img
        src="./redbg.avif"
        className="absolute top-16 left-94 z-10 w-[42vw] lg:w-[16vw] lg:h-[19vw]  object-cover "
        alt="pic"
      />
      <img
        src="./bgpic1.avif"
        className="absolute z-10 top-50 right-46 w-[11vw]"
        alt="pic"
      />
      <img
        src="./bgpic2.avif"
        alt="pic"
        className="lg:w-[22vw] lg:h-[25vw] absolute  left-16 "
      />
      <img
        src="./bgpic3.avif"
        alt="pic"
        className="absolute right-110 w-[15vw] h-[38vh] top-160"
      />
    </div>
  );
};

export default HeaderImagesDiv;
