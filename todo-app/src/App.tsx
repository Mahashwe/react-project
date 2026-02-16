import React from 'react';
import './App.css';
import Main from './Components/main';
import Dashboard from './Components/dashboard';
import { Routes, Route } from "react-router-dom";
import Head from './Components/title';
import { useState } from 'react';


type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <>
      <Head />
      <Routes>
        <Route
          path="/"
          element={<Main tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/progress"
          element={<Dashboard tasks={tasks} />}
        />
      </Routes>
    </>
  );
}

export default App;