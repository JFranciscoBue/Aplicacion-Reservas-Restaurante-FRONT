import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./components/admin/forms/LoginAdmin";
import Dashboard from "./components/admin/Dashboard";
import Reservations from "./components/admin/reservations/Reservations";
import MainPage from "./views/clients/MainPage";
import ReservationForm from "./views/clients/ReservationForm";
import RegisterForm from "./views/admin/RegisterForm";
import { AdminProvider } from "./context/AdminContext";
import ContactForm from "./views/clients/ContactForm";
import ContactsList from "./views/admin/ContactsList";

function App() {
  return (
    <>
      <AdminProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin/register" element={<RegisterForm />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/new-reservation" element={<ReservationForm />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/all-contacts" element={<ContactsList />} />
        </Routes>
      </AdminProvider>
    </>
  );
}

export default App;
