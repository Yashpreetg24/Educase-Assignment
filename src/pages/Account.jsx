import './Account.css';

const Account = ({ user }) => {
  const defaultUser = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'
  };

  const displayUser = user || defaultUser;

  return (
    <div className="account-page">
      <div className="account-header">
        <h2>Account Settings</h2>
      </div>
      <div className="account-content page">
        <div className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar">
              <img src="/profile.jpg" alt="Profile Avatar" />
            </div>
            <div className="camera-icon">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6 1.2H10.5L9.33333 0H4.66667L3.5 1.2H1.4C0.63 1.2 0 1.74 0 2.4V9.6C0 10.26 0.63 10.8 1.4 10.8H12.6C13.37 10.8 14 10.26 14 9.6V2.4C14 1.74 13.37 1.2 12.6 1.2ZM7 8.4C5.46 8.4 4.2 7.32 4.2 6C4.2 4.68 5.46 3.6 7 3.6C8.54 3.6 9.8 4.68 9.8 6C9.8 7.32 8.54 8.4 7 8.4ZM7 4.56C6.02 4.56 5.25 5.208 5.25 6C5.25 6.792 6.02 7.44 7 7.44C7.98 7.44 8.75 6.792 8.75 6C8.75 5.208 7.98 4.56 7 4.56Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="profile-info">
            <h3>{displayUser.name}</h3>
            <p>{displayUser.email}</p>
          </div>
        </div>
        <div className="profile-description">
          <p>{displayUser.description || defaultUser.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
