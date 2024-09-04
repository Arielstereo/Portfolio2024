"use client";

import { useTranslations } from "next-intl";
import "atropos/css";
import Atropos from "atropos/react";
import Aos from "aos";
import { useEffect } from "react";

const TerminalCard = () => {
  const text = useTranslations("Terminal");
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Atropos className="w-[360px] lg:w-[500px] mx-auto">
      <div
        className="mx-auto w-[360px] lg:w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl"
        data-aos="zoom-in-up"
      >
        <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
          <div className="flex absolute left-3">
            <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
          </div>
          <div className="flex-1 text-center text-white">node</div>
        </div>
        <div className="p-2.5">
          <div className="flex justify-start">
            <div className="mt-4 text-start ml-6 lg:ml-12">
              <p className="text-green-400">{text("line1")}</p>
              <p className="text-slate-100"> * email: user@gmail.com</p>
              <p className="text-slate-100"> * password: user123</p>
              <br />
              <p className="text-sky-400">{text("line2")}</p>
              <p className="text-green-400">
                <span className="mr-2" >{text("line3")}</span>
                <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite] text-lg">
                  .
                </span>
                <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite] text-lg">
                  .
                </span>
                <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite] text-lg">
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Atropos>
  );
};

export default TerminalCard;
