import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import style from '../components/Navbar.module.css'
import Cookies from "js-cookie";


function Video() {
     const [visitCount, setVisitCount] = useState(0);
    
   
      const updateVisitCount = () => {
        const currentCount = Cookies.get("visitCount");
        
       
        if (currentCount) {
          const newCount = parseInt(currentCount) + 1;
          Cookies.set("visitCount", newCount, { expires: 365 });
          setVisitCount(newCount);
        } else {
          Cookies.set("visitCount", 1, { expires: 365 });
          setVisitCount(1);
        }
      };
    
      useEffect(() => {
        updateVisitCount();
      }, []);
    
      return (
        
        <div id="footer">
          <h1>Video Ejemplo</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dSHgRZGIznU?si=8hHNsyijXxfuQsNm" frameborder="0" allowfullscreen></iframe>
          <p>Has visitado: {visitCount}</p>
          <button id="boton-dificil" class="boton-animado" onmouseover="moverBoton()">Haz clic aquí</button>
          &copy; 2025 Nuestra Empresa - Todos los derechos reservados | Términos y Condiciones | Política de Privacidad
        </div>
        
        
      );
    };



export default Video;