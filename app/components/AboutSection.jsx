import React from "react";
import Image from "next/image";

const basePath = "";

const AboutSection = () => {
  return (
    <section id="about" className="mt-36 mb-30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 lg:px-16">
        <div></div>
        <div></div>

        <div className="col-span-1 lg:col-span-4 flex justify-center lg:items-start mb-8 lg:mb-0">
          <Image
            src={`${basePath}/images/laptop.svg`}
            alt="laptop, glasses and a potted plant"
            width={350}
            height={500}
            className="w-full max-w-[350px] h-auto"
          />
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="mb-16">
            <small className="text-[#577BE6] mb-4 text-l font-bold">
              About me
            </small>
            <h2 className="text-[#577BE6] mb-2 text-xl sm:text-2xl lg:text-3xl font-bold">
              Education
            </h2>

            <p className="text-[#ffffff] text-lg sm:text-xl px-0.5 font-medium">
              Ontario College Graduate Certificate in Business Intelligence
              Systems Infrastructure
            </p>
            <p className="text-[#ffffff] text-lg sm:text-lg px-0.5 mb-4 opacity-80">
              Algonquin College (2026 - Present)
            </p>

            <p className="text-[#ffffff] text-lg sm:text-xl px-0.5 font-medium">
              BASc in Computer Engineering, Engineering Management &
              Entrepreneurship Option
              {/* &#10003; */}
            </p>
            <p className="text-[#ffffff] text-lg sm:text-lg px-0.5 mb-4 opacity-80">
              University of Ottawa (2019 - 2024)
            </p>
          </div>

          <div className="mt-16 mb-16 flex justify-center">
            <Image
              src={`${basePath}/images/arrow.svg`}
              alt="arrow"
              width={150}
              height={150}
              className="transform -rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
