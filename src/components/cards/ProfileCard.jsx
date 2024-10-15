import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  const text = useTranslations("Home");
  return (
    <div className="group before:hover:scale-95 before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-cyan-100 via-cyan-500 to-sky-600 before:absolute before:top-0 w-80 h-80 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <div className="w-28 h-28 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-95 group-hover:-translate-x-0  group-hover:-translate-y-10 transition-all duration-500">
        <Image
          src="/perfil.png"
          alt="photo"
          width={300}
          height={300}
          className="rounded-full w-full h-full object-coverl"
        />
      </div>
      <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
        <span className="text-2xl text-slate-800">
          Ariel Martinez
        </span>
        <p className="text-slate-50 text-lg">{text("title1")}</p>
      </div>
      <Link
        className="bg-slate-900 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
        href="https://cv.empren.dev/"
        target="_blank"
      >
        <div className="bg-slate-950 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500 border-2 border-sky-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#ffffff" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
              />
              <path
                d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </div>
        <p className="translate-x-2 mt-3 ml-2 text-slate-100 text-lg">CV online</p>
      </Link>
    </div>
  );
};

export default ProfileCard;
