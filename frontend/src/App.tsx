// src/App.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAz from "./pages/RegisterAz";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import JobForm from "./pages/JobForm.tsx";
import JobForm2 from "./pages/JobForm2.tsx";
import JobFormC from "./pages/JobFormC.tsx";
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
        <Route path="/registerAz" element={<RegisterAz />} />
        <Route path="/QuizLogistica" element={<JobForm />} />
        <Route path="/QuizRistorazione" element={<JobForm2 />} />
        <Route path="/QuizCategorie Protette" element={<JobFormC />} />
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
