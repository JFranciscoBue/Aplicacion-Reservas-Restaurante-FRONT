import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterAdmin from "./components/admin/forms/RegisterAdmin";
import LoginAdmin from "./components/admin/forms/LoginAdmin";
import Dashboard from "./components/admin/Dashboard";
import Reservations from "./components/admin/reservations/Reservations";
import Header from "./components/navbar/Header";
import MainPage from "./views/clients/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </>
  );
}

export default App;
