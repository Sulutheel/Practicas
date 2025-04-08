import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

function HomePage() {
  const navigate = useNavigate();

  const goToCoches = () => {
    navigate("/coches");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      padding="0 20px"
    >
      <Typography variant="h2" gutterBottom>
        Coches S.A
      </Typography>
      <Typography variant="body1" paragraph sx={{ maxWidth: 600 }}>
        En nuestra tienda de autos, nos especializamos en ofrecer vehículos de alta calidad que combinan rendimiento, seguridad y estilo. Nos comprometemos a brindar una experiencia de compra transparente y personalizada, respaldada por un equipo de expertos que te acompañará en cada paso del proceso. Ya sea que estés buscando tu primer auto, un modelo familiar o un vehículo de lujo, contamos con una amplia selección para satisfacer tus necesidades y superar tus expectativas.
      </Typography>
      <Button variant="contained" color="primary" onClick={goToCoches}>
        Ir a listado de Coches
      </Button>
    </Box>
  );
}

export default HomePage;

