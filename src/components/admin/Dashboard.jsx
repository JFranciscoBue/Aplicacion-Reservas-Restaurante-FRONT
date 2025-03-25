import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Mi dashboard</h2>
      <button id="editProfileButton">Editar perfil</button>
      <div className="container__data">
        <ul className="container__data__info-list">
          <li>
            <h3>Nombre:</h3>
            <p>NOMBRE DEL ADMINISTRADOR LOGUEADO</p>
          </li>
          <li>
            <h3>Apellido:</h3>
            <p>APELLIDO DEL ADMINISTRADOR LOGUEADO</p>
          </li>
          <li>
            <h3>Numero de documento:</h3>
            <p>DOCUMENTO DEL ADMINISTRADOR LOGUEADO</p>
          </li>
          <li>
            <h3>Correo electronico:</h3>
            <p>EMAIL DEL ADMINISTRADOR LOGUEADO</p>
          </li>
          <li>
            <h3>Telefono:</h3>
            <p>TELEFONO DEL ADMINISTRADOR LOGUEADO</p>
          </li>
        </ul>

        <div className="container__data__reservations">
          <h3>Administar reservas</h3>
          <Link id="allReservationsButton" to="/reservations">
            VER TODAS LAS RESERVAS
          </Link>
          <img
            src="https://tr.rbxcdn.com/180DAY-ac66dcc94f0e6a114778fd2d19e7c5b3/420/420/Image/Png/noFilter"
            alt="Foto de perfil del administrador"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
