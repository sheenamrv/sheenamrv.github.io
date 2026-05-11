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
            {/* <small className="text-[#577BE6] mb-4 text-l font-bold">
              About me
            </small> */}
            <h1 className="text-[#577BE6] m-b text-4xl font-extrabold mb-12">
              Education
            </h1>

            <div className="space-y-6">
              <div
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] p-8"
                data-aos="fade-up"
              >
                <p className="text-indigo-300 text-sm font-semibold mb-4">
                  2026 - Present
                </p>

                <h2 className="text-white text-2xl font-bold mb-4">
                  Ontario College Graduate Certificate in Business Intelligence
                  Systems Infrastructure
                </h2>

                <p className="text-gray-300 text-lg">Algonquin College</p>
              </div>

              <div
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] p-8"
                data-aos="fade-up"
              >
                <p className="text-indigo-300 text-sm font-semibold mb-4">
                  2019 - 2024
                </p>

                <h2 className="text-white text-2xl font-bold mb-4">
                  BASc in Computer Engineering, Engineering Management &
                  Entrepreneurship Option
                </h2>

                <p className="text-gray-300 text-lg">University of Ottawa</p>
              </div>
            </div>

            {/* &#10003; */}
            {/* <p className="text-[#ffffff] text-xl px-0.5 font-medium">
              BASc in Computer Engineering, Engineering Management &
              Entrepreneurship Option
              
            </p> */}
            {/* <p className="text-[#ffffff] text-lg px-0.5 mb-4 opacity-80">
              University of Ottawa (2019 - 2024)
            </p> */}
          </div>

          <div className="mt-16 mb-16 justify-center hidden md:flex">
            <Image
              src={`${basePath}/images/arrow.svg`}
              alt="arrow"
              width={150}
              height={150}
              className="transform -rotate-45"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
