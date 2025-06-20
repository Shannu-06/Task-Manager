import { useState } from "react";

import "./App.css";
import { AppRoutes } from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";
import HomePage from "./components/HomePage";
import { useCounter } from "./hooks/useCounter";
import StudentProfile from "./components/StudentProfile";
import { TaskProvider } from "./contexts/TaskContext";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="h-screen  ">
      <AuthProvider>
      <TaskProvider>
      <AppRoutes />
      </TaskProvider>
      </AuthProvider>
    
    </div>
  );
}

export default App;
  