import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Head from './Components/title';
import Main from './Components/main';

function App() {
  return (
    <>
      <Head />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/progress" element={<h2>Dashboard page</h2>} />
      </Routes>
    </>
  );
}

export default App;
