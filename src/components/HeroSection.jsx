import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full  text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Dora 👋</h1>
          <p className="text-lg md:text-2xl text-gray-700 -mb-8">- Junior full-stack developer with a strong focus on front-end development - </p>
        </div>
      
      </div>
    </section>
  );
}

export default HeroSection;
