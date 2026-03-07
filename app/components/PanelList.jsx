import React from "react";

const basePath = "";

function Panel({
  role,
  company,
  employmentType,
  years,
  description,
  imageUrl,
  tools,
}) {
  return (
    <div
      className="bg-[#ffffff] w-full max-w-[1200px] rounded-[15px] border-2 mt-6 mb-6 mx-4 drop-shadow-md"
      data-aos="fade-up"
    >
      <div className="flex flex-col sm:flex-row ml-6 mr-6 my-8">
        <img
          src={imageUrl}
          alt={company}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-md border mb-4 sm:mb-0 sm:mr-8 mt-2 mx-auto sm:mx-0"
        />

        <div className="mt-2 text-center sm:text-left">
          <h2 className="text-[#577BE6] text-xl sm:text-2xl font-semibold mb-2">
            {role}
          </h2>
          <h3 className="text-[#212427] text-lg sm:text-xl mb-2">{company}</h3>
          <p className="text-[#212427] text-sm sm:text-base">{years}</p>
          <p className="text-[#212427] text-sm sm:text-base">
            • {employmentType}
          </p>

          <p className="text-[#212427] text-sm sm:text-base">• {description}</p>

          {tools && tools.length > 0 && (
            <div className="mt-4 mb-8">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-[#577BE6] text-[#ffffff] p-2 rounded-[20px] border border-[#D0D0D0] flex items-center justify-center px-4"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PanelList() {
  // My List of Experiences - ADD HERE
  const panelData = [
    {
      role: "Software Developer",
      company: "General Dynamics Mission Systems - Canada",
      employmentType: "Full-Time",
      years: "January 2025 - September 2025",
      description: "⚙️ Test Engineering",
      imageUrl: `${basePath}/images/gdms_c_logo.jpg`,
      tools: [],
    },
    {
      role: "Information Technology Developer",
      company: "Canada Revenue Agency",
      employmentType: "Full-Time",
      years: "April 2024 - January 2025",
      description: "🧾 Tax Portals",
      imageUrl: `${basePath}/images/GoC logo.jpg`,
      tools: ["Angular", "Node.js", "TypeScript", "Tailwind CSS", "Java"],
    },
    {
      role: "Information Technology Developer",
      company: "Canada Revenue Agency",
      employmentType: "Internship",
      years: "May 2023 - August 2023",
      description: "👩‍💻 Internal Learning Application",
      imageUrl: `${basePath}/images/GoC logo.jpg`,
      tools: ["Angular", "Node.js", "TypeScript"],
    },
    {
      role: "Information Technology Developer",
      company: "Canada Revenue Agency",
      employmentType: "Internship",
      years: "September 2022 - December 2022",
      description: "💻 DevLabs",
      imageUrl: `${basePath}/images/GoC logo.jpg`,
      tools: ["Python", "Flask", "TypeScript"],
    },
    {
      role: "Software Developer",
      company: "Transport Canada",
      employmentType: "Internship",
      years: "June 2021  - April 2022",
      description: "🚢 Marine Electronic Document Validation",
      imageUrl: `${basePath}/images/GoC logo.jpg`,
      tools: ["C#", "ASP.NET Core"],
    },
  ];

  return (
    <div>
      {panelData.map((panel, index) => (
        <Panel key={index} {...panel} />
      ))}
    </div>
  );
}

export default PanelList;
