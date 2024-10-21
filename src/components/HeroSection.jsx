import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full  text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Hello, I'm Dora 👋
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 -mb-8">
            <strong>- Junior web developer - </strong>
          </p>{" "}
          <br />
          <p className="text-lg md:text-2xl text-gray-600 mt-6 ">
            Brussels, Belgium
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
