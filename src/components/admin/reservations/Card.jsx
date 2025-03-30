import { useState } from "react";
import "./Card.css";

const Card = ({ id, date, time, num_comensales, status }) => {
  return (
    <div className="reservationTable">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>FECHA</td>
            <td>HORA</td>
            <td>CANTIDAD DE PERSONAS</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{num_comensales}</td>
          </tr>
        </tbody>
      </table>
      <div className="reservationTable__reservationStatus">
        <p id="showStatus">ESTADO DE LA RESERVA PAPU</p>
      </div>
    </div>
  );
};

export default Card;
