import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-left p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Dora 👋</h1>
          <p className="text-lg md:text-2xl text-gray-700">- Junior full-stack developer with a strong focus on front-end development - </p>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <img src="[your-image-url]" alt="Your Image" className="w-full rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
