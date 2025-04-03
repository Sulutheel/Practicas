import React, { useState } from 'react';
import { Button, Box, TextField, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';

const Items = () => {
  const items = [
    { id: 1, name: 'Camisa', description: 'Prenda de vestir de tela que cubre el torso, abotonada por delante, generalmente con cuello y mangas.', price: 10, imageUrl: 'camisa.png' },
    { id: 2, name: 'Pantalon', description: 'Prenda de vestir que se ajusta a la cintura y llega generalmente hasta el pie, cubriendo cada pierna separadamente.', price: 20, imageUrl: 'pantalon.png' },
    { id: 3, name: 'Casaca de Cuero', description: 'Vestidura ceñida al cuerpo, generalmente de uniforme, con mangas que llegan hasta la muñeca, y con faldones hasta las corvas.', price: 30, imageUrl: 'casaca.png' },
    { id: 4, name: 'Zapatos', description: 'Calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel, fieltro, paño u otro tejido, más o menos escotado por el empeine.', price: 40, imageUrl: 'zapatos.png' },
  ];

  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilter = () => {
    setFilteredItems(
      items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    );
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <TextField
        label="Filtrar por nombre"
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
        {filteredItems.map((item) => (
          <Card key={item.id} sx={{ width: 250, borderRadius: '10px', boxShadow: 3 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrl}
                alt={item.name}
                sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Items;
