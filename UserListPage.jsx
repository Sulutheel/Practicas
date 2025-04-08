import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import UsersListComponent from '../components/UsersListComponent';



function UserListPage() {

    const navigate = useNavigate();

  /*   const goToHome = () => {
        navigate("/");
    }
    
    const goToNewUser = () => {
      navigate("/users/new");
    } */
    const goToHome = () => {
      navigate("/");
  }
  
  const goToNewCoche = () => {
    navigate("/coches/new");
  }



  return (
    <div>
      <h2>Lista de Coches</h2>
      <Button variant="contained" color="primary" onClick={goToNewCoche}>
         Registar Nuevo Coche
      </Button>
      <UsersListComponent />

      <Button variant="contained" color="primary" onClick={goToHome}>
        Home
      </Button>
    </div>
  );
}
export default UserListPage;