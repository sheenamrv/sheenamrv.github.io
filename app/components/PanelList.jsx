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
      className="w-full max-w-[1200px] rounded-[24px] mt-6 mb-6 mx-4 border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
      data-aos="fade-up"
    >
      <div className="flex flex-col sm:flex-row ml-6 mr-6 my-8 sm:ml-10">
        <img
          src={imageUrl}
          alt={company}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-md border mb-4 sm:mb-0 sm:mr-8 mt-2 mx-auto sm:mx-0"
        />

        <div className="mt-2 text-center sm:text-left">
          <p className="text-indigo-300 text-sm font-semibold mb-4">{years}</p>
          {/* text-[#577BE6] */}
          <h2 className=" text-white text-2xl sm:text-2xl font-bold mb-4">
            {/* text-white text-2xl font-bold mb-4 */}
            {role}
          </h2>
          <h3 className="text-gray-300 text-lg sm:text-xl mb-2">{company}</h3>
          <p className="text-gray-300 text-sm sm:text-base mb-2"></p>
          <p className="text-gray-300 text-sm sm:text-base">
            • {employmentType}
          </p>

          <p className="text-gray-300 text-sm sm:text-base">• {description}</p>

          {tools && tools.length > 0 && (
            <div className="mt-4 mb-2">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-[#577BE6] text-[#ffffff] p-2 rounded-[20px] flex items-center justify-center px-4 py-1"
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
      role: "Junior Software Developer (P1)",
      company: "General Dynamics Mission Systems - Canada",
      employmentType: "Full-Time",
      years: "Jan 2025 - Sep 2025",
      description: "⚙️ Test Engineering",
      imageUrl: `${basePath}/images/gdms_c_logo.jpg`,
      tools: [],
    },
    {
      role: "Information Technology Developer (CS-01)",
      company: "Canada Revenue Agency",
      employmentType: "Full-Time",
      years: "Apr 2024 - Jan 2025",
      description: "🧾 Tax Portals",
      imageUrl: `${basePath}/images/GoC logo.jpg`,
      tools: ["Angular", "Node.js", "TypeScript", "Tailwind CSS", "Java"],
    },
    {
      role: "Information Technology Developer",
      company: "Canada Revenue Agency",
      employmentType: "Co-op",
      years: "May 2023 - Aug 2023",
      description: "👩‍💻 Internal Learning Application",
      imageUrl: `${basePath}/images/GoC logo.jpg`,
      tools: ["Angular", "Node.js", "TypeScript"],
    },
    {
      role: "Information Technology Developer",
      company: "Canada Revenue Agency",
      employmentType: "Co-op",
      years: "Sep 2022 - Dec 2022",
      description: "💻 DevLabs",
      imageUrl: `${basePath}/images/GoC logo.jpg`,
      tools: ["Python", "Azure Databricks Notebooks", "Flask", "TypeScript"],
    },
    {
      role: "Software Developer",
      company: "Transport Canada",
      employmentType: "Co-op",
      years: "Jun 2021  - Apr 2022",
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
