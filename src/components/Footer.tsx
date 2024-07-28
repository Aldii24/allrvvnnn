const Footer = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-4xl font-bold text-primary text-center border-b border-primary mb-4 pb-2 ">
        THANK U ♡{" "}
      </h3>

      <p className="text-center text-sm text-primary pb-2">
        &copy; {new Date().getFullYear()} Created by Aldi. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
