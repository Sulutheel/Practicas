import { useState, useEffect} from "react";
import { BancaOnline } from '../services/BancaOnline';
import CurrencyToggle from "./CurrencyToggle";
const cuenta = new BancaOnline(0);



const Banca = () => {
  const [saldo, setSaldo] = useState(cuenta.saldo);
  const [inputDinero, setInputDinero] = useState(0);
  const [error, setError] = useState("");
  const [moneda, setMoneda] = useState("$")
  const [monedaSimbolo, setMonedaSimbolo] = useState('$');
  

  const handleDepositar = () => {
    setError("");
    cuenta.depositar(inputDinero);
    setSaldo(cuenta.saldo);
  };
  const handleRetirar = () => {
    setError("");
    cuenta.retirar(Number(inputDinero));
    setSaldo(cuenta.saldo);
    try {
        setSaldo(cuenta.retirar(Number(inputDinero)));
    } catch (error) {
        setError(error.message);
    }
    
  }
  const handleCurrencyToggle = (m) =>{
    setMoneda(m);
    console.log('');
    sessionStorage.setItem("moneda",m)

  }
  useEffect(()=>{
    var m= sessionStorage.getItem("moneda");
    setMoneda(m);
  },[]);

  const handleCambioMoneda =(data) =>{
    setMonedaSimbolo(data);
  }

  return (
    <div>
      <h1>Cuenta Bancaria</h1>
      <p>Saldo: {saldo} {moneda} {monedaSimbolo}</p>
      <input type="number" name="inputDinero" id="inputDinero" value={inputDinero}
      onChange={(e)=> setInputDinero(Number(e.target.value))}
      placeholder="Introduce Cantidad"/>
      <button onClick={handleDepositar}>Depositar </button>
      <button onClick={handleRetirar}>Retirar </button>
      <CurrencyToggle onCambioMoneda={handleCambioMoneda}/>
      <button onClick={() => handleCurrencyToggle('$')}>$</button>
      <button onClick={() => handleCurrencyToggle('€')}>€</button>
      <button onClick={() => handleCurrencyToggle('£')}>£</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Banca;
