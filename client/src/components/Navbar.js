import React from 'react';
import useDarkMode from "../hooks/UseDarkMode"


const Navbar = (key, initialValue) => {

  const [darkMode, setDarkMode] = useDarkMode(key, initialValue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
   
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};
export default Navbar;

