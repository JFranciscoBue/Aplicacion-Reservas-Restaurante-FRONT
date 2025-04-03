import "./Dashboard.css";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../admin/adminNavbar/AdminNavbar";

const Dashboard = () => {
  const { adminData, setAdminData } = useContext(AdminContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (Object.keys(adminData).length === 0) {
      navigation("/admin/login");
    }
  }, [adminData, navigation]);

  const handleLogOutButton = () => {
    setAdminData({});
    navigation("/admin/login");
  };

  return (
    <>
      <AdminNavbar />
      <div className="container">
        <h2>Mi dashboard</h2>
        <button id="editProfileButton">Editar perfil</button>
        <div className="container__data">
          <ul className="container__data__info-list">
            <li>
              <h3>Nombre:</h3>
              <p>{adminData.name}</p>
            </li>
            <li>
              <h3>Apellido:</h3>
              <p>{adminData.surname}</p>
            </li>
            <li>
              <h3>Numero de documento:</h3>
              <p>{adminData.dni}</p>
            </li>
            <li>
              <h3>Correo electronico:</h3>
              <p>{adminData.email}</p>
            </li>
            <li>
              <h3>Telefono:</h3>
              <p>{adminData.phone}</p>
            </li>
          </ul>
          <div className="container__data__reservations">
            <h3>Administar reservas</h3>
            <Link id="allReservationsButton" to="/reservations">
              VER TODAS LAS RESERVAS
            </Link>
            <Link id="allContactsButton" to="/all-contacts">
              CONTACTOS DE CLIENTES
            </Link>
            <img
              src={adminData.imgProfile}
              alt="Foto de perfil del administrador"
            />
          </div>
        </div>
        <button id="LogOutButton" onClick={handleLogOutButton}>
          Cerrar Sesion
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
