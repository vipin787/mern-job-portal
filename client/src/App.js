import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
