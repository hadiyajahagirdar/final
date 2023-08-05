import React from 'react';
import'./App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/item/:id" element={<Detail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

