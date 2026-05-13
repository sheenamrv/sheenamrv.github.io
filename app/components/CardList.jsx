import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaFigma } from "react-icons/fa";

function Card({
  projectName,
  technology,
  description,
  githubLink,
  figmaLink,
  imageUrl,
  type,
  contributions,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div data-aos="fade-up">
      <div className="block w-72 sm:w-96 rounded-xl overflow-hidden border shadow-lg mt-6 mb-6 mx-auto sm:mx-6">
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={`${projectName} preview`}
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-white p-4 flex flex-col min-h-[400px]">
          <h2 className="text-xl font-semibold text-gray-900">{projectName}</h2>
          <p className="mb-1 text-sm text-[#577BE6] font-semibold">{type}</p>
          <div className="flex items-center gap-4 my-1">
            <p className="text-sm text-gray-600 ">Explore: </p>
            {githubLink && (
              <Link href={githubLink} target="_blank">
                <FaGithub className="text-[#577BE6] text-2xl hover:scale-110 transition-all" />
              </Link>
            )}

            {figmaLink && (
              <Link href={figmaLink} target="_blank">
                <FaFigma className="text-[#577BE6] text-2xl hover:scale-110 transition-all" />
              </Link>
            )}
          </div>
          <p className="text-gray-600 my-1">{description}</p>

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

          {/* DROPDOWN SECTION*/}
          <div className="mt-auto pt-4">
            {contributions && (
              <button
                onClick={() => setOpen(!open)}
                className="mt-4 border border-[#577BE6] text-[#577BE6] px-4 py-2 rounded-lg transition hover:bg-[#577BE6] hover:text-white"
              >
                {open ? "Hide Contributions" : "View Contributions"}
              </button>
            )}
          </div>
          {open && contributions && (
            <div className="mt-5 border-t pt-4">
              <h3 className="font-semibold text-[#577BE6] mb-3">
                Contributions
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                {contributions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
      type: "Web Application",
      technology: ["Next.js", "Tailwind CSS", "Figma", "AOS"],
      description:
        "A clean, responsive portfolio built to showcase my projects, skills, and journey as a developer.",
      githubLink: "https://github.com/sheenamrv/sheenamrv.github.io",
      figmaLink:
        "https://www.figma.com/design/Bx5WGvLBFUyUeHKK9CCrYX/Sheena-s-Website?node-id=0-1",
      imageUrl: "/images/personal_website.jpg",
      contributions: [
        "Designed the website layouts, colour palette, and visual assets in Figma before development.",
        "Built a fully responsive portfolio website using Next.js and Tailwind CSS.",
        "Implemented scroll animations and interactive UI effects inspired by modern portfolio websites using AOS.",
        "Created sections to showcase featured projects, experiences, recommendation excerpts, and professional links.",
        "Continuously update and refine the website design, content, and user experience over time.",
      ],
    },
    {
      projectName: "Flight Price Prediction",
      type: "Machine Learning Web Application",
      technology: [
        "Python",
        "Django",
        "HTML",
        "scikit-learn",
        "Pandas",
        "SerpAPI",
        "SQLite",
      ],
      description:
        "Team Project - Django web app that combines live flight data, a trained ML pipeline, and historical data to generate real-time flight price insights.",
      githubLink:
        "https://github.com/sheenamrv/Flight-Price-Prediction-Web-App",
      imageUrl: "/images/flight_fare_forecast.png",
      contributions: [
        "Developed Python script to extract ~43K flight records for historical data.",
        "Built backend logic for API integration, predictions, and analytics display.",
        "Integrated a serialized .pkl ML pipeline into the Django web application.",
        "Implemented price insight features using live and historical flight data.",
        "Designed and implemented the Django-based flight search UI.",
      ],
    },
    {
      projectName: "Fatal vs. Non-Fatal Traffic Collisions in Ottawa",
      type: "Binary Classification Machine Learning Project",
      technology: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "scikit-learn",
        "Jupyter Notebook",
      ],
      description:
        "Team Project - Binary classification machine learning project focused on predicting fatal vs. non-fatal traffic collisions using Ottawa traffic collision data.",
      githubLink:
        "https://github.com/sheenamrv/binary-classification-traffic-collisions",
      imageUrl: "/images/ml_eda.png",
      contributions: [
        "Led exploratory data analysis on 94K+ Ottawa traffic collision records.",
        "Analyzed class imbalance, missing data, and feature relationships for collision severity prediction.",
        "Created visualizations and heatmaps to examine feature distributions, severity relationships, and traffic collision trends.",
        "Identified patterns, trends, and recommendations to support feature engineering and binary classification modeling.",
      ],
    },
    {
      projectName: "Hospital Management Database System",
      type: "Database & Business Intelligence Project",
      technology: ["Microsoft SQL Server", "T-SQL", "Power BI"],
      description:
        "Team Project - Developed a relational hospital database system and supported business reporting through analytical SQL queries and Power BI dashboards.",
      githubLink: "https://github.com/andri3366/DBA-Final-Project",
      imageUrl: "/images/db_dashboard.png",
      contributions: [
        "Created business-focused analytical questions to support hospital operations and reporting needs.",
        "Developed T-SQL DQL queries to analyze hospital operations data including appointment trends, doctor workload, prescription usage, revenue, and room utilization.",
        "Implemented DCL scripts in SQL Server to manage database users, roles, and access permissions.",
        "Contributed to the development of the Patient and Clinical Operations Power BI dashboard for hospital data visualization and reporting.",
      ],
    },
    // {
    //   projectName: "TO DO: Filsauo Web App",
    //   type: "TO DO",
    //   technology: ["TO DO"],
    //   description: "",
    //   githubLink: "",
    //   imageUrl: "/images/TODO",
    //   contributions: ["TO DO"],
    // },
    {
      projectName: "Hack the Hill Branding & Website UI Design",
      type: "Visual Design Project",
      technology: ["Figma", "Adobe Illustrator"],
      description:
        "Produced reusable design assets, sponsorship materials, and website UI designs for Hack the Hill, a University of Ottawa hackathon.",
      figmaLink:
        "https://www.figma.com/design/XtFnddBTAXY1YMBSE1IkRE/Hack-the-Hill-Designs?node-id=0-1&t=U46TgTAdAjLjEQ9o-1",
      imageUrl: "/images/hack_the_hill_landing_page.jpg",
      contributions: [
        "Developed the core visual identity and reusable branding assets used across event and promotional materials.",
        "Collaborated with cross-functional teams to design website UI and strengthen the organization’s digital presence.",
        "Created social media graphics to increase engagement and event visibility.",
        "Designed sponsorship package materials to support partner outreach and funding initiatives.",
      ],
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
