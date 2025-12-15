// src/App.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
const App: React.FC = () => {
  
  const hideHeader = ["/login", "/register"];
  
  const hide = hideHeader.includes(location.pathname);
  
  return (
    <>

      {!hide && <Header />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
export default App;
