import React, { useState } from "react";
import { link } from 'react-router-dom';
import style from '../components/Navbar.module.css'

function Accesibilidad() {
    return(
        <div id="footer">
            <h1>Bienvenido a Nuestra Página </h1>
            <img src="https://picsum.photos/600/300" alt="Imagen de ejemplo"/>
            <p>Esta es una página de ejemplo donde ofrecemos información sobre nuestros productos y servicios. Puedes contactarnos o suscribirte para recibir descuentos exclusivos.</p>
            &copy; 2025 Nuestra Empresa - Todos los derechos reservados | Términos y Condiciones | Política de Privacidad

        </div>
    )
}
export default Accesibilidad;