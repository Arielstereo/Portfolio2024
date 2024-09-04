import Badge from "./Badge";

const badges = {
  Tailwind: (
    <Badge
      className="text-white bg-gradient-to-r from-violet-700 via-sky-500 to-violet-700 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      title="Tailwind"
    />
  ),
  Next: (
    <Badge
      className="text-white bg-gradient-to-r from-slate-900 via-slate-500 to-slate-700 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      title="Next.js"
    />
  ),
  React: (
    <Badge
      className="text-white bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      title="React"
    />
  ),
  Zustand: (
    <Badge
      className="text-white bg-gradient-to-r from-pink-500 via-pink-400 to-pink-700 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      title="Zustand"
    />
  ),
  Astro: (
    <Badge
      className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      title="Astro"
    />
  ),
  Mongo: (
    <Badge
      className="text-black bg-gradient-to-r from-green-800 via-green-300 to-green-700 hover:bg-gradient-to-br font-medium rounded-full text-sm px-3 py-2.5 text-center mr-2 mb-2"
      title="Mongo DB"
    />
  ),
  Express: (
    <Badge
      className="text-black bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      title="Express"
    />
  ),
  Vercel: (
    <Badge
      className="flex items-center text-black bg-slate-100 hover:bg-gradient-to-br font-medium rounded-full text-md px-8 py-1 mb-2 ring-1 ring-white"
      title="VERCEL"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path fill="#000" d="M17.992 17.023L11.981 6.977L6.008 17.023z" />
        </svg>
      }
    />
  ),
};

export default badges;
