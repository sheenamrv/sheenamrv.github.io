import React from "react";
import Link from "next/link";
import Image from "next/image";
import Time from "./Time";

const basePath = "";

const FooterSection = () => {
  return (
    <footer className="mt-60">
      <div
        className="bg-[#0A001A] rounded-[15px] drop-shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 lg:px-16"
        data-aos="zoom-out-up"
      >
        <div className="hidden lg:block lg:col-span-2"></div>
        <div className="col-span-1 lg:col-span-4 place-self-center my-8 lg:my-12 flex justify-center lg:justify-center">
          <Image
            src={`${basePath}/images/cartoon_v2.svg`}
            alt="cartoon image of Sheena"
            width={450}
            height={450}
            className="w-full max-w-[450px] h-auto"
          />
        </div>

        <div className="col-span-1 lg:col-span-4 mt-4 lg:mt-auto mb-auto text-center lg:text-left lg:place-self-center">
          <div className="text-center">
            <h2 className="text-[#577BE6] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">
              Sheena Marie Verana
            </h2>
            <p className="text-gray-300 font-medium text-base mt-3 mb-2">
              {" "}
              Currently coding from Ottawa{" "}
            </p>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] p-8">
              <Time></Time>
            </div>

            {/* <Link href="mailto: smrverana@gmail.com">
              <p className="text-[#DDEE84] font-semibold text-xl transition-all hover:scale-110 mt-4">
                &quot;It's about <i>time</i> we connected!&quot;
              </p>
            </Link> */}
            <Link href="mailto: smrverana@gmail.com">
              <button className="px-6 py-3 bg-[#DDEE84] text-[#000000] font-medium rounded shadow-lg hover:bg-[#577BE6] mt-14 transition-all hover:scale-110">
                Let's connect
              </button>
            </Link>
          </div>
        </div>

        {/* QR Code*/}
        <div className="col-span-1 lg:col-span-2 place-self-center my-8 lg:my-12 text-center lg:hidden">
          <p className="text-[#577BE6] font-medium text-lg sm:text-xl mb-2">
            Scan for linktree
          </p>
          <Image
            src={`${basePath}/images/qrcode.png`}
            alt="qr code for linktree website"
            width={200}
            height={200}
            className="w-full max-w-[200px] mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center gap-x-10 mt-28">
        <Link href={"https://www.linkedin.com/in/sheenaverana"} target="_blank">
          <Image
            src={`${basePath}/images/linkedin.svg`}
            alt="linkedin logo"
            width={30}
            height={30}
            className="transition-all hover:scale-110"
          />
        </Link>
        <Link href="mailto: smrverana@gmail.com">
          <Image
            src={`${basePath}/images/google.svg`}
            alt="google logo"
            width={30}
            height={30}
            className="transition-all hover:scale-110"
          />
        </Link>
        <Link href={"https://github.com/sheenamrv"} target="_blank">
          <Image
            src={`${basePath}/images/github.svg`}
            alt="github logo"
            width={30}
            height={30}
            className="transition-all hover:scale-110"
          />
        </Link>
      </div>
    </footer>
  );
};

export default FooterSection;
