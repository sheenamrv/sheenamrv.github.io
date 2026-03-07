import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({
  projectName,
  technology,
  description,
  link,
  imageUrl,
  backgroundColor,
}) {
  return (
    // Outer Card
    <div
      className={"h-80 w-80 rounded-[15px] m-6 border-4"}
      style={{ backgroundColor }}
    >
      <div className="m-12">
        <div className="float-right">
          <Link href={"/"}>
            <Image
              src="/images/link.svg"
              alt="link symbol"
              width={30}
              height={30}
            />
          </Link>
        </div>

        <div className="justify-center text-center pt-20">
          <h2 className="text-[#577BE6] text-2xl font-semibold">
            {projectName}
          </h2>

          <p>{technology}</p>
        </div>
      </div>
    </div>
  );
}

function CardList() {
  // My List of Projects - ADD HERE
  const panelData = [
    {
      projectName: "Personal Website",
      technology: "React, NextJs, Tailwind",
      description: "description",
      link: "link",
      imageUrl: "/images/GoC logo.jpg",
      backgroundColor: "#EAF7FF",
    },
    {
      projectName: "Personal Website",
      technology: "React, NextJs, Tailwind",
      description: "description",
      link: "link",
      imageUrl: "/images/GoC logo.jpg",
      backgroundColor: "#FFF7D7",
    },
    {
      projectName: "Personal Website",
      technology: "React, NextJs, Tailwind",
      description: "description",
      link: "link",
      imageUrl: "/images/GoC logo.jpg",
      backgroundColor: "#F9F1FF",
    },
    {
      projectName: "Personal Website",
      technology: "React, NextJs, Tailwind",
      description: "description",
      link: "link",
      imageUrl: "/images/GoC logo.jpg",
      backgroundColor: "#EAF7FF",
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
