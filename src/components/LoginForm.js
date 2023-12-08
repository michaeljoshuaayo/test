import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
  const [isLoginHovered, setLoginHovered] = useState(false);
  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isGoogleHovered, setGoogleHovered] = useState(false);

  const pageStyles = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #36D1DC, #5B86E5)',
    color: '#fff',
  };
  const formContainerStyles = {
    width: '500px',
    height: '700px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    background: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputStyles = {
    width: '380px',
    padding: '15px',
    margin: '10px 0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    border: '1px solid #ddd',
    outline: 'none',
    fontSize: '16px',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  const hoverInputStyles = {
    borderColor: '#4CAF51', // Change to the color you desire on hover
    boxShadow: '0 0 5px rgba(76, 175, 80, 0.7)', // Add box shadow on hover
  };

  const buttonStyles = {
    width: '100%',
    padding: '12px',
    margin: '15px 0',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: isLoginHovered ? '#45a049' : '#4CAF51',
    color: isLoginHovered ? '#fff' : '#fff',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
  };

  const facebookButtonStyles = {
    ...buttonStyles,
    backgroundColor: isFacebookHovered ? '#2d4278' : '#3b5998',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const googleButtonStyles = {
    ...buttonStyles,
    backgroundColor: isGoogleHovered ? '#1c3aa9' : '#4285F4',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const separatorStyles = {
    margin: '40px 0',
    width: '100%',
    borderBottom: '2px solid #ddd',
    textAlign: 'center',
    lineHeight: '0.1em',
    color: '#333',
  };

  const orTextStyles = {
    background: '#fff',
    padding: '0 10px',
  };

  const iconStyles = {
    marginRight: '8px',
    fontSize: '1.2em',
  };

  return (
    <div style={formContainerStyles}>
      <h2 style={{ color: '#333' }}>Login</h2>
      <form>
        <label>
          <input
            type="text"
            placeholder="Username"
            style={{ ...inputStyles, ...(isLoginHovered && hoverInputStyles) }}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="Password"
            style={{ ...inputStyles, ...(isLoginHovered && hoverInputStyles) }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={buttonStyles}
          onMouseEnter={() => setLoginHovered(true)}
          onMouseLeave={() => setLoginHovered(false)}
        >
          Login
        </button>
        <div style={separatorStyles}>
          <span style={orTextStyles}>or Sign in with</span>
        </div>
        <button
          type="button"
          style={facebookButtonStyles}
          onMouseEnter={() => setFacebookHovered(true)}
          onMouseLeave={() => setFacebookHovered(false)}
        >
          <FontAwesomeIcon icon={faFacebook} style={{ ...iconStyles, fontSize: '1.2em' }} />
          Login with Facebook
        </button>
        <button
          type="button"
          style={googleButtonStyles}
          onMouseEnter={() => setGoogleHovered(true)}
          onMouseLeave={() => setGoogleHovered(false)}
        >
          <FontAwesomeIcon icon={faGoogle} style={{ ...iconStyles, fontSize: '1.2em' }} />
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
