import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="page landing-page">
      <div className="landing-content">
        <h1>Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="landing-actions">
        <Button variant="primary" onClick={() => navigate('/signup')} className="mb-12">
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Landing;
