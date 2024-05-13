import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import React from 'react';

function App() {
  return (
    <div className='App'>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    </div>
  );
}

export default App;
