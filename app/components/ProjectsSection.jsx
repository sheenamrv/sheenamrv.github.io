import React from "react";
import CardList from "./CardList";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div></div>
        <div></div>
        <div className="col-span-8">
          <h1 className="text-[#577BE6] m-b text-4xl font-extrabold mb-12 ">
            Projects
          </h1>
          <CardList></CardList>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
