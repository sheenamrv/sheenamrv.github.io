import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ projectName, technology, description, link, imageUrl }) {
  return (
    <div data-aos="fade-up">
      <div className="block w-96 rounded-xl overflow-hidden border shadow-lg m-6 transition-all hover:scale-110">
        <Link href={link} target="_blank">
          <div className="w-full h-48 relative">
            <Image
              src={imageUrl}
              alt={`${projectName} preview`}
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-white p-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {projectName}
            </h2>
            <p className="text-gray-600 mt-1">{description}</p>

            <div className="flex flex-wrap mt-2 gap-2">
              {technology.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm rounded-full bg-[#577BE6] text-[#ffffff] "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function CardList() {
  // My List of Projects - ADD HERE
  const panelData = [
    {
      projectName: "Personal Website",
      technology: ["Next.js", "Tailwind CSS"],
      description: "Web application",
      link: "https://github.com/sheenamrv/sheenamrv.github.io",
      imageUrl: "/images/personal_website.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {panelData.map((panel, index) => (
        <Card key={index} {...panel} />
      ))}
    </div>
  );
}

export default CardList;
