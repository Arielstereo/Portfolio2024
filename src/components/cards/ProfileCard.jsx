import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  const text = useTranslations("Home")
  return (
    <div className="group before:hover:scale-95 before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-blue-400 to-sky-700 before:absolute before:top-0 w-80 h-80 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <div className="w-28 h-28 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-95 group-hover:-translate-x-0  group-hover:-translate-y-10 transition-all duration-500">
        <Image
          src="/foto_perfil.png"
          alt="photo"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
        <span className="text-2xl text-slate-800 font-semibold">
          Ariel Martinez
        </span>
        <p className="text-slate-50">{text("title1")}</p>
      </div>
      <Link
        className="bg-blue-500 flex gap-2 shadow-md shadow-black px-6 py-3 text-slate-50 rounded-md z-10 hover:scale-110 transition-all duration-500 hover:bg-slate-900"
        href="https://cv.empren.dev/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
        >
          <g fill="#FFF">
            <path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01" />
            <path
              fillRule="evenodd"
              d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1"
              clipRule="evenodd"
            />
          </g>
        </svg>
        CV Online
      </Link>
    </div>
  );
};

export default ProfileCard;
