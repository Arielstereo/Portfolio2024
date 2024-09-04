"use client"

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
    <Atropos className="w-[360px] lg:w-[500px] mx-auto" >
      <section data-aos="zoom-in-up" className="bg-slate-900 border-2 border-slate-100 text-slate-100 p-6 rounded-xl w-[360px] lg:w-[500px] font-mono mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4 text-start ml-6 lg:ml-12">
          <p className="text-green-400">{text("line1")}</p>
          <p className="text-white"> - email: user@gmail.com</p>
          <p className="text-white"> - password: user123</p>
          <br />
          <p className="text-sky-400">{text("line2")}</p>
          <p className="text-white"> GET/ <span className="text-green-400">200</span></p>
        </div>
      </section>
    </Atropos>
  );
};

export default TerminalCard;
