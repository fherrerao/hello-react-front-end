import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
