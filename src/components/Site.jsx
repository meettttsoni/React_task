import { useEffect, useState } from "react";
import './Site.css';
import logo from './images/ji.png'; 
import search from './images/search.png'; 
import light from './images/light.png'; 
import dark from './images/moon.png'; 

const Site = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`navbar ${theme}`}>
      <img src={logo} alt="Logo" className='logo' />
      
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Feature</li>
        <li>About</li>
      </ul>

      <div className='search'>
        <input type="text" placeholder='Search' />
        <img src={search} alt="Search" />
      </div>

      
      <img
        src={theme === 'light' ? light : dark}
        alt="Toggle Theme"
        className='toggle'
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Site;
