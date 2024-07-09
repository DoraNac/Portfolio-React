import React from "react";

const projects = [
  {
    title: "Movies App React",
    description:
      "A simple Netflix-style movie application built with React and Vite. Users can search for movies and view information about their favorite movies.",
    projectUrl: "https://movie-meowflix-api.netlify.app/",
    repoUrl: "https://github.com/DoraNac/movie-flix",
    imageUrl: "./u.jpg",  },
  {
    title: "To Do App React",
    description:
      "A simple To-Do app built with React and Vite. Saving 'to-do' inputs in the local storage, it has 'done' and 'delete' features.",
    projectUrl: "https://to-do-app-local-storage.netlify.app/",
    repoUrl: "https://github.com/DoraNac/ToDoApp",
    imageUrl: "./todo.jpg",  },
  {
    title: "Weather Station DOM manipulation JS",
    description:
      "Simple app where users get the current weather and 4-day forecast for any city. It fetches data (OpenMeteoAPI) based on the location input (OpenStreetMapAPI) and displays it using DOM manipulation in JS.",
    projectUrl: "https://weather-station-dom-manipulation.netlify.app/",
    repoUrl: "https://github.com/DoraNac/weather-station-DOM-manipulation1",
    imageUrl: "./weather.jpg",
  },
  {
    title: "Responsive Zig Zag React",
    description:
      "A lightweight, completely responsive React webpage with: Navbar, hero section, grid images and text and a footer. Built using Vite template.",
    projectUrl: "https://responsive-layout-react-css.netlify.app/",
    repoUrl: "https://github.com/DoraNac/zig-zag-react",
    imageUrl: "./light.jpg",
  },
  {
    title: "Responsive Shop React",
    description:
      "A fully responsive single-page React application that emulates a shopping page. It features a product display grid and dynamically loads more items upon user interaction.",
    projectUrl: "https://shop-react-red-black-white.netlify.app/",
    repoUrl: "https://github.com/DoraNac/responsive-react",
    imageUrl: "./shop.jpg",
  },
  {
    title: "Responsive CSS/HTML",
    description:
      "This project shows the use of Flexbox and Grid layout techniques to create a responsive webpage. The design adapts to different screen sizes, including laptops and mobile devices.",
    projectUrl: "https://mobile-responsive-exercise.netlify.app/",
    repoUrl: "https://github.com/DoraNac/responsive-flex-grid",
    imageUrl: "./resp.desk.jpg",
  },
  {
    title: "SASS/HTML Tech News Page",
    description:
      "This project demonstrates the use of SASS for styling a single-page HTML webpage. The design includes a navbar, hero section, content sections with images and text and a footer with social media links.",
    projectUrl: "https://project-css-exercise.netlify.app/",
    repoUrl: "https://github.com/DoraNac/HTML-Sass",
    imageUrl: "./ult1.jpg",
  },
  {
    title: "CSS/HTML Grid",
    description:
      "This project demonstrates the use of grid display and basic styling. It features a navigation bar, a hero section, a grid of images, and a footer.",
    projectUrl: "https://grid-app-news.netlify.app/",
    repoUrl: "https://github.com/DoraNac/FigmaGrid",
    imageUrl: "./grid.jpg",
  },
  {
    title: "CSS/HTML Flex",
    description:
      "This project demonstrates the use of flex display showcasing available and unavailable features.",
    projectUrl: "https://card-css-cd26f8.netlify.app/",
    repoUrl: "https://github.com/DoraNac/FigmaFlex",
    imageUrl: "./flex.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-blue-100 p-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <p className="text-2xl md:text-1xl">
        Here you can find and check all my <strong>projects</strong>. <br /> <br />
        <strong>Descriptions, images</strong> and <strong>links</strong> are provided. <strong>Click on the project</strong> to
        get redirected to its page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.projectUrl}
            className="bg-white p-4 rounded-lg shadow-lg block flex flex-col justify-between"
          >
            <div>
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block"
            >
              My GitHub Repo
            </a>
          </a>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;
