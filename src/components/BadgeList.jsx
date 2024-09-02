import  Badge from "./Badge";

const badges = {
  Tailwind: <Badge  className="text-white bg-gradient-to-r from-violet-700 via-sky-500 to-violet-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ring-2 ring-white" title="Tailwind" />,
  Next: <Badge className="text-white bg-gradient-to-r from-slate-900 via-slate-600 to-slate-800 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ring-2 ring-white" title="Next.js"
  />,
  React: <Badge className="text-white bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ring-2 ring-white" title="React" />,
  Zustand: <Badge  className="text-white bg-gradient-to-r from-pink-500 via-pink-400 to-pink-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ring-2 ring-white" title="Zustand" />,
  Astro: <Badge className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ring-2 ring-white" title="Astro" />,
};

export default badges