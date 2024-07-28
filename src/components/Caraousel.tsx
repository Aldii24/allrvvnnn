import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Circle } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

const images = [
  "/moon1.jpeg",
  "/moon2.jpeg",
  "/moon3.jpeg",
  "/moon4.jpeg",
  "/moon5.jpeg",
];

const Caraousel = ({ autoPlay }: { autoPlay: boolean }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    let intervalId = null;

    if (autoPlay) {
      intervalId = setInterval(handleNextImage, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoPlay, imageIndex]);

  return (
    <div className="relative">
      <motion.img
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        src="tree.gif"
        alt=""
        className="absolute right-0 -top-12 w-[250px]"
      />
      <img
        src={images[imageIndex]}
        alt=""
        className="rounded-md w-full h-[180px]"
      />

      <button
        className="absolute top-[45%] p-1.5 left-4 bg-primary rounded-full"
        onClick={handlePrevImage}
      >
        <ArrowLeft size={15} className="text-lightMode" />
      </button>
      <button
        className="absolute top-[45%] p-1.5 right-4 bg-primary rounded-full"
        onClick={handleNextImage}
      >
        <ArrowRight size={15} className="text-lightMode" />
      </button>
      <div className="absolute bottom-2 inset-x-0 flex gap-1 justify-center">
        {images.map((_, index) => (
          <div className="" key={index}>
            <Circle
              onClick={() => setImageIndex(index)}
              size={10}
              className={`rounded-full cursor-pointer ${
                imageIndex === index ? "bg-lightMode" : ""
              } text-lightMode`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caraousel;
