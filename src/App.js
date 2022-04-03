import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hash from './components/Hash';
import Block from './components/Block';
import BlockChain from './components/BlockChain';
import ChainBlock from './components/ChainBlock';

import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hash" element={<Hash />} /> 
        <Route path="/block" element={<Block />} /> 
        <Route path="/blockchain" element={<BlockChain />}/>
      </Routes>

    </div>

  )
}
