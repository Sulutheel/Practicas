import logo from './logo.svg';
import './App.css';
import MessageComponent from './components/MessageComponent';
import Coches from './components/Coches';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import UserFormInsertPage from './pages/UserFormInsertPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coches" element={<UserListPage />} />
        <Route path="/coches/:id/edit" element={<UserFormInsertPage />} />  {/* No implementado */}
        <Route path="/coches/new" element={<UserFormInsertPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
