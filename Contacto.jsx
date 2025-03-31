import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import style from '../components/Navbar.module.css'

function Contacto() {
    
        return(
            <div id="footer">
                <h1>Formulario de Contacto</h1>
                    <form>
                        <input type="text" aria-label="Introducir Nombre"  autoFocus placeholder="Nombre Completo"/><br/>
                        <input type="email" aria-label="Introducir Correo Electronico" placeholder="Correo Electrónico"/><br/>
                         <textarea aria-label="Introducir Mensaje" placeholder="Mensaje"></textarea><br/>
                         <button class="boton">Enviar Mensaje</button>
                    </form> 
                    &copy; 2025 Nuestra Empresa - Todos los derechos reservados | Términos y Condiciones | Política de Privacidad

            </div>
        )
    
}







export default Contacto;