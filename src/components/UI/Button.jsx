import Card from './Card';

const Button = ({
  active = false,
  children,
  className = '',
  onClick,
  type = 'button',
}) => {
  if (type === 'reset') {
    className += ' bg-danger text-white';
  }

  if (type === 'submit') {
    className += ' bg-success text-white';
  }

  return (
    <Card className="overflow-hidden rounded-lg">
      <button
        className={`w-full h-full duration-200
        ${className}
        ${active ? 'bg-secondary text-white' : 'bg-white'}
        hover:brightness-90 focus:brightness-90 focus:outline-none`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Card>
  );
};

export default Button;
