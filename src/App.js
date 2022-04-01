import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>

  )
}
