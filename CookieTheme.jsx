import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const CookieTheme = () => {
  // TO DO: Conseguir el valor de 'theme' del Cookie i.e. Cookies.get
  const storedTheme = Cookies.get("theme") || 'light';


  // Asignar el valor inicial
  const [theme, setTheme] = useState(storedTheme);

  // Actualizar el tema cuando haya cambios en el estado de theme
  useEffect(() => {

    document.body.className = theme; // Apply theme to the body class

    // TO DO: Actualizar el valor del Cookie según el 'theme'
    Cookies.set("theme", theme);
    sessionStorage.setItem("edad", 21)
    console.log(sessionStorage.getItem("edad"));

  }, [theme]);

  // 

  // TO DO: Incluir una funcion para quitar el Cookie

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark'
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const quitarTheme = () =>{
    Cookies.remove("theme");
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button onClick={quitarTheme}>
        Quitar
      </button>
    </div>
  );
};

export default CookieTheme;