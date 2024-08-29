const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex items-center justify-center gap-2 text-slate-200">
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2v4m4.2 1.8l2.9-2.9M18 12h4m-5.8 4.2l2.9 2.9M12 18v4m-7.1-2.9l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9"
          />
        </svg>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default Loading;
