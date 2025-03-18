const { ShimmerButton } = require("./magicui/shimmer-button")

const Badge = ({ title }) => {
  return (
    <ShimmerButton className="shadow-2xl">
    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
      {title}
    </span>
  </ShimmerButton>
  );
};

export default Badge;
