const RunText = () => {
  return (
    <div className="overflow-hidden w-full">
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex justify-center items-center flex-col">
        <h3 className="text-4xl text-primary font-extrabold whitespace-nowrap animate-marquee">
          HEY IT'S ME, IM A FRONTEND DEVELOPER
        </h3>
      </div>
      {/* BIGGER SCREEN */}

      {/* MOBILE SCREEN */}
      <div className="md:hidden flex justify-center items-center flex-col">
        <h3 className="text-2xl text-primary font-extrabold whitespace-nowrap animate-marquee">
          HEY IT'S ME
        </h3>
        <h3 className="text-2xl text-primary font-extrabold whitespace-nowrap animate-marquee">
          IM A SOFTWARE ENGINEER
        </h3>
      </div>
      {/* MOBILE SCREEN */}
    </div>
  );
};

export default RunText;
