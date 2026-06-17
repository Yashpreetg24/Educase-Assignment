import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import './SignUp.css';

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email: formData.email, name: formData.fullName, company: formData.company });
    navigate('/account');
  };

  return (
    <div className="page signup-page">
      <h1>Create your PopX account</h1>
      
      <form onSubmit={handleSubmit} className="signup-form">
        <Input 
          label="Full Name" 
          type="text" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
        />
        <Input 
          label="Phone number" 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
        <Input 
          label="Email address" 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <Input 
          label="Password" 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <Input 
          label="Company name" 
          type="text" 
          name="company" 
          value={formData.company} 
          onChange={handleChange} 
        />
        
        <div className="radio-group">
          <label className="radio-label-main">Are you an Agency?<span className="required-asterisk">*</span></label>
          <div className="radio-options">
            <label className="radio-option">
              <input 
                type="radio" 
                name="isAgency" 
                value="yes" 
                checked={formData.isAgency === 'yes'} 
                onChange={handleChange} 
              />
              Yes
            </label>
            <label className="radio-option">
              <input 
                type="radio" 
                name="isAgency" 
                value="no" 
                checked={formData.isAgency === 'no'} 
                onChange={handleChange} 
              />
              No
            </label>
          </div>
        </div>

        <Button variant="primary" type="submit" className="signup-btn" style={{marginTop: 'auto', marginBottom: '16px'}}>
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
