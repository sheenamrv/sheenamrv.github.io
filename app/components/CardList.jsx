import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Card({
  projectName,
  technology,
  description,
  link,
  imageUrl,
  type,
  contributions,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div data-aos="fade-up">
      <div className="block w-72 sm:w-96 rounded-xl overflow-hidden border shadow-lg mt-6 mb-6 mx-auto sm:mx-6 transition-all duration-300 hover:scale-105">
        <Link href={link} target="_blank">
          <div className="w-full h-48 relative">
            <Image
              src={imageUrl}
              alt={`${projectName} preview`}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <div className="bg-white p-4">
          <h2 className="text-xl font-semibold text-gray-900">{projectName}</h2>
          <p className="mb-1 text-sm text-[#577BE6] font-semibold">{type}</p>
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

          {/* DROPDOWN SECTION*/}
          {contributions && (
            <button
              onClick={() => setOpen(!open)}
              className="mt-4 border border-[#577BE6] text-[#577BE6] px-4 py-2 rounded-lg transition hover:bg-[#577BE6] hover:text-white"
            >
              {open ? "Hide Contributions" : "View Contributions"}
            </button>
          )}
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
      link: "https://github.com/sheenamrv/sheenamrv.github.io",
      imageUrl: "/images/personal_website.jpg",
    },
    {
      projectName: "Flight Price Prediction",
      type: "Machine Learning Web Application",
      technology: [
        "Python",
        "Django",
        "scikit-learn",
        "Pandas",
        "SerpAPI",
        "SQLite",
      ],
      description:
        "Team Project - Django web app that combines live flight data, a trained ML pipeline, and historical data to generate real-time flight price insights.",
      link: "https://github.com/sheenamrv/Flight-Price-Prediction-Web-App",
      imageUrl: "/images/personal_website.jpg",
      contributions: [
        "Designed and implemented the Django-based flight search UI.",
        "Built backend logic for API integration, predictions, and analytics display.",
        "Developed Python script to extract ~43K flight records for historical data.",
        "Integrated a serialized .pkl ML pipeline into the Django web application.",
        "Implemented price insight features using live and historical flight data.",
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
      link: "YOUR_GITHUB_LINK",
      imageUrl: "/images/personal_website.jpg",
      contributions: [
        "Led exploratory data analysis on 94K+ Ottawa traffic collision records.",
        "Analyzed class imbalance, missing data, and feature relationships for collision severity prediction.",
        "Created visualizations and heatmaps to examine feature distributions, severity relationships, and traffic collision trends.",
        "Identified patterns and trends relevant to fatal versus non-fatal collision classification.",
      ],
    },
    // {
    //   projectName: "Hospital Database",
    //   type: "Binary Classification Machine Learning Project",
    //   technology: [
    //     "Python",
    //     "Pandas",
    //     "Matplotlib",
    //     "Seaborn",
    //     "scikit-learn",
    //     "Jupyter Notebook",
    //   ],
    //   description:
    //     "Team Project - Binary classification machine learning project focused on predicting fatal vs. non-fatal traffic collisions using Ottawa traffic collision data.",
    //   link: "YOUR_GITHUB_LINK",
    //   imageUrl: "/images/personal_website.jpg",
    //   contributions: [
    //     "Led exploratory data analysis on 94K+ Ottawa traffic collision records.",
    //     "Analyzed class imbalance, missing data, and feature relationships for collision severity prediction.",
    //     "Created visualizations and heatmaps to examine feature distributions, severity relationships, and traffic collision trends.",
    //     "Identified patterns and trends relevant to fatal versus non-fatal collision classification.",
    //   ],
    // },
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
