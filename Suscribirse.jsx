import React, { useState } from "react";
import { Link } from 'react-router-dom';
import style from '../components/Navbar.module.css'

function Suscribirse() {
    
    return( 
        <div id="suscripcion" class="seccion">
            <h1>Formulario de Suscripción</h1>
         <form>
            <input type="email" aria-label="Introducir tu correo electronico" autoFocus placeholder="Tu correo electrónico"/><br/>
            <button class="boton">¡Suscríbete ahora y obtén un descuento en 10 segundos!</button>
        </form>
        &copy; 2025 Nuestra Empresa - Todos los derechos reservados | Términos y Condiciones | Política de Privacidad

        </div>
    )

}




export default Suscribirse;