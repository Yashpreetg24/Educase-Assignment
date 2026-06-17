import './Input.css';

const Input = ({ label, type = 'text', name, value, onChange, placeholder, required = false }) => {
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ' '}
        className="input-field"
        required={required}
      />
      {label && (
        <label htmlFor={name} className="input-label">
          {label} {required && <span className="required-asterisk">*</span>}
        </label>
      )}
    </div>
  );
};

export default Input;
