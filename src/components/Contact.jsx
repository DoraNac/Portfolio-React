import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-gray-700 text-lg">
          <strong>Thank you</strong> for visiting my portfolio!
        </p>
        <p className="text-gray-700 text-lg mt-4">Whether you have <strong>a project</strong> in mind, <strong> a question</strong> about my work, or simply <strong>want to connect</strong>, I'm  open to new opportunities and collaborations.</p>
        <p className="text-gray-700 text-lg mt-6">
          Feel free to <strong>reach out to me via email or phone</strong>. You can also connect
          with me on LinkedIn to stay updated on my latest projects and
          professional journey.
        </p>
        <div className="mt-6">
          <p>
            Email:{" "}
            <a href="mailto:email@example.com" className="text-blue-500">
              dora.nacinovic99@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="text-blue-500">+32 456 326 682</span>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dora-nacinovic-568b202a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              My LinkedIn
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/DoraNac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            > My GitHub
              
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
