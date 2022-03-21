const Card = ({ children, className }) => {
  return <div className={`rounded-2xl ${className}`}>{children}</div>;
};

export default Card;
