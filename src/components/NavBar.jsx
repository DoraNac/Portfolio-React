import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex space-x-8">
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="https://github.com" target="_blank" className="text-gray-600 hover:text-gray-900">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
