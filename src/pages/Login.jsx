import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import './Login.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email: formData.email, name: 'Marry Doe' }); // mock name for login
    navigate('/account');
  };

  return (
    <div className="page login-page">
      <h1>Signin to your PopX account</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      
      <form onSubmit={handleSubmit} className="login-form">
        <Input 
          label="Email Address" 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter email address"
          required 
        />
        <Input 
          label="Password" 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Enter password"
          required 
        />
        
        <Button variant="primary" type="submit" className="login-btn" style={{marginTop: 'auto', marginBottom: '16px'}}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
