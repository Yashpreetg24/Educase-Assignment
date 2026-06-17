import './Button.css';

const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '', style }) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
