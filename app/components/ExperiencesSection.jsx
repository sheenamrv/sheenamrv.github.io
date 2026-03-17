import React from "react";
import Image from "next/image";
import PanelList from "./PanelList";

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 lg:px-16">
        <div></div>
        <div></div>

        <div className="col-span-1 lg:col-span-8">
          <small className="text-[#577BE6] mb-4 text-l font-bold ">
            Professional Work
          </small>
          <h1 className="text-[#577BE6] m-b text-4xl font-extrabold mb-12">
            Experience
          </h1>
          <PanelList />
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
