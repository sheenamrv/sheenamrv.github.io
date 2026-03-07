import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateOttawaTime = () => {
      const ottawaTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(`${ottawaTime}`);
    };

    updateOttawaTime();
    const intervalId = setInterval(updateOttawaTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" font-medium text-lg sm:text-xl lg:text-3xl mb-3 text-[#ffffff]">
      {time || "Loading Ottawa time..."}
    </div>
  );
};

export default Time;
