const randomPhotosGalerry = [
  "/r1.jpeg",
  "/r2.jpeg",
  "/r3.jpeg",
  "/r4.jpeg",
  "/r5.gif",
  "/r6.jpeg",
  "/r7.jpeg",
  "/r8.gif",
];

const RandomPhotos = () => {
  //   const { theme } = useContext(darkModeContext);

  return (
    <div className="flex flex-col mt-5">
      {/* <h3
        className={`flex justify-end text-md font-thin ${
          theme === "light" ? "text-primary" : "text-lightMode"
        } `}
      >
        Idk, just random photos :3
      </h3> */}
      <div className="grid grid-cols-2 gap-4">
        {randomPhotosGalerry.map((photo, index) => (
          <div key={index} className="relative w-full h-[200px]">
            <img
              src={photo}
              alt=""
              className="absolute inset-0 object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomPhotos;
