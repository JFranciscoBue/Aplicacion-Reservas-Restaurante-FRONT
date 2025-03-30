import "./Reservations.css";
import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Footer from "../../footer/Footer";
import { AdminContext } from "../../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [filter, setFilter] = useState("");

  const { adminData } = useContext(AdminContext);

  const navigation = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);

    setFilter(selectedValue);
  };

  const filterHandle = () => {
    console.log(
      `Filtrando resetas por el estado de la variable FILTER: ${filter}`
    );
  };

  const API = "http://localhost:3000";

  useEffect(() => {
    if (Object.keys(adminData).length > 0) {
      axios
        .get(`${API}/reservations`)
        .then((res) => {
          console.log(res.data);
          setReservations(res.data);
        })
        .catch((e) => console.error(e));
    } else {
      navigation("/admin/login");
    }
  }, [adminData, navigation]);

  return (
    <>
      <div className="reservationsDashboardContainer">
        <h2>Todas las reservas agendadas</h2>
        <div className="reservationsDashboardContainer__filters">
          <label>Filtrar por estado:</label>
          <select
            name="reservation-status"
            id="reservation-status"
            onChange={handleSelectChange}
          >
            <option value="all">Todos</option>
            <option value="pending">Pendientes</option>
            <option value="concluded">Concluidas</option>
          </select>
          <button onClick={filterHandle}>Filtrar</button>
        </div>
        {reservations.map((reservation) => (
          <Card
            key={reservation.id}
            id={reservation.id}
            date={reservation.date}
            time={reservation.time}
            num_comensales={reservation.num_comensales}
            status={reservation.status}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Reservations;
