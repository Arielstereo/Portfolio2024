const Badge = ({ className, title, icon }) => {
  return (
    <div className={className}>
      {icon}
      {title}
    </div>
  );
};

export default Badge;
