import React from "react";

const ExcerptsSection = () => {
  return (
    <section id="quote" className="mb-32" data-aos="fade-right">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 lg:px-16">
        <div></div>
        <div></div>
        <div className="col-span-1 lg:col-span-8 text-center">
          <h1 className="text-[#ffffff] text-xl sm:text-2xl lg:text-3xl font-semibold mt-40 mb-12 italic">
            "Her dedication, consistent effort, as well as her ability to
            quickly adapt and learn new skills have resulted in valuable
            contributions to the team, showing commitment to personal growth and
            mastery in her role."
          </h1>
          <h2 className="text-[#ffffff] text-lg">
            - IT Team Leader, Canada Revenue Agency
          </h2>
          <h1 className="text-[#ffffff] text-xl sm:text-2xl lg:text-3xl font-semibold mt-40 mb-12 italic">
            "Having a team member like Sheena was an absolute pleasure and truly
            elevated our project's dynamic. Sheena not only got along
            exceptionally well with everyone, fostering a harmonious and
            collaborative atmosphere, but also significantly contributed to our
            collective success."
          </h1>
          <h2 className="text-[#ffffff] text-lg">
            - Technical Advisor, Transport Canada
          </h2>
          <h1 className="text-[#ffffff] text-xl sm:text-2xl lg:text-3xl font-semibold mt-40 mb-12 italic">
            "Sheena distinguished herself by bringing a can-do attitude coupled
            with exceptional data analysis and programming skills. Her
            development work helped to foster our growing motto of
            'People-First.'"
          </h1>
          <h2 className="text-[#ffffff] text-lg">
            - IT Analyst/ Developer, Canada Revenue Agency
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ExcerptsSection;
