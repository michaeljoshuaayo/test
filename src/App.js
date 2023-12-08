// App.js
import './App.css'
import React from 'react';
import LoginForm from './components/LoginForm';
import backgroundImage from './bg.jpg';
const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',

  color: '#fff',
};
function App() {
  return (
    <div style={appStyles}>
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',  
        backgroundSize: 'cover',  
        backgroundRepeat: 'no-repeat', 
        minHeight: '100vh',           
        display: 'flex',            
        alignItems: 'center',         
        justifyContent: 'center',  
        width: '100%',  

      }}
    >
        <LoginForm />
      </div>
    </div>
 
  );
}

export default App;
