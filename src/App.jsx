import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import HomePage from './components/HomePage';
import TaskList from './components/TaskList';
import { AddTask } from './components/AddTask';
import TaskDetail from './components/TaskDetail';


const App = () => {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
};

export default App;