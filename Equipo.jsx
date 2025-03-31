import { useState } from "react";

export default function Equipo() {
  const [jugadores, setJugadores] = useState(["Messi", "Ronaldo", "Neymar"]);
  const [nuevoJugador, setNuevoJugador] = useState("");

  // TO DO: Crear una funcion para agregarJugador usando spreading
  const agregarJugador = () => {
    setJugadores(prevJugadores => [...jugadores, nuevoJugador])
  }

  const eliminarJugador = (nombre) => {
    setJugadores(jugadores.filter(jugador => jugador !== nombre)); 
  };

  return (
    <div>
      <h2>🏆 Equipo de Fútbol</h2>
      <ul>
        {jugadores.map((jugador, index)=>
            <li>{jugador} <button onClick={() => eliminarJugador(jugador)}>❌</button></li>
        )}

      </ul>

      <input 
        type="text" 
        placeholder="Nombre del jugador" 
        value={nuevoJugador} 
        onChange={(e) => setNuevoJugador(e.target.value)} 
      />

       <button onClick={agregarJugador}>Agregando Jugadores</button>
      
    </div>
  );
}