import { useState } from "react";

import "./App.css";
import { AppRoutes } from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";
import HomePage from "./components/HomePage";
import { useCounter } from "./hooks/useCounter";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <div className="h-screen  ">
      <TaskProvider>
      <AppRoutes />
      </TaskProvider>
    
    </div>
  );
}

export default App;