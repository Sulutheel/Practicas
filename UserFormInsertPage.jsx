import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';
import React, { useState } from 'react';

function UserFormInsertPage () {
  /* const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState(''); */
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Mandar fetch");
/* 
    const user = {
      nombre: nombre,
      edad: edad,
      email: email
    }; */
    const coche = {
      marca: marca,
      modelo: modelo,
      año: año
    };

    const response = await fetch('http://localhost:5000/api/v1/coches', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(coche)
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.error("Error al enviar los datos");
    }
  };

  return (
    <div>
      <h2>Registar Coche</h2>
      <Box component="form" onSubmit={handleFormSubmit}>
        Marca
        <TextField
          id="marca"
          label="Marca"
          variant="outlined"
          onChange={(e) => setMarca(e.target.value)}
        />
        Modelo
        <TextField
          id="modelo"
          label="Modelo"
          variant="outlined"
          onChange={(e) => setModelo(e.target.value)}
        />
        Año
        <TextField
          id="año"
          label="Año"
          variant="outlined"
          onChange={(e) => setAño(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default UserFormInsertPage;
