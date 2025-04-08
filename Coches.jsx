import React, { useState } from 'react';
import { Button, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Coches = () => {
  const initialCoches = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020, },
    { id: 2, marca: 'Honda', modelo: 'Civic', año: 2021,  },
    { id: 3, marca: 'Ford', modelo: 'Fusion', año: 2019,  }
  ];

  const [filter, setFilter] = useState('');
  const [coches, setCoches] = useState(initialCoches);
  const [filteredCoches, setFilteredCoches] = useState(initialCoches);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilter = () => {
    setFilteredCoches(
      coches.filter((coche) =>
        (coche.marca + ' ' + coche.modelo).toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const handleDelete = (id) => {
    const updatedCoches = coches.filter((coche) => coche.id !== id);
    setCoches(updatedCoches);
    setFilteredCoches(updatedCoches);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <TextField
        label="Filtrar por marca o modelo"
        value={filter}
        onChange={handleFilterChange}
        sx={{ marginBottom: '20px', width: '300px' }}
      />
      <Button
        onClick={handleFilter}
        variant="contained"
        sx={{ marginBottom: '20px', marginLeft: '10px' }}
      >
        Filtrar
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de coches">
          <TableHead>
            <TableRow>

              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Año</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCoches.map((coche) => (
              <TableRow key={coche.id}>

                <TableCell>{coche.marca}</TableCell>
                <TableCell>{coche.modelo}</TableCell>
                <TableCell>{coche.año}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(coche.id)}
                    variant="contained"
                    color="error"
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Coches;
