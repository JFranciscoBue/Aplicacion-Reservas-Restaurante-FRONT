import "./Reservations.css";
import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Footer from "../../footer/Footer";
import { AdminContext } from "../../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newStatusExit, setNewStatusExist] = useState(false);

  const { adminData } = useContext(AdminContext);

  const navigation = useNavigate();

  const API = "http://localhost:3000";

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);

    setFilter(selectedValue);
  };

  const filterHandle = () => {
    if (filter !== "all") {
      axios
        .get(`${API}/reservations/getByStatus/${filter}`)
        .then((res) => {
          console.log(res.data);
          setReservations(res.data);
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      axios
        .get(`${API}/reservations`)
        .then((res) => {
          console.log(res.data);
          setReservations(res.data);
        })
        .catch((e) => console.error(e));
    }
  };

  const finished = (id) => {
    setNewStatusExist(false);

    axios
      .patch(`${API}/reservations/finished/${id}`)
      .then((res) => {
        setNewStatusExist(true);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setTimeout(() => {
          setNewStatusExist(false);
        }, 3000);
      });
  };

  const cancelled = (id) => {
    setNewStatusExist(false);

    axios
      .patch(`${API}/reservations/cancel/${id}`)
      .then((res) => {
        setNewStatusExist(true);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setTimeout(() => {
          setNewStatusExist(false);
        }, 3000);
      });
  };

  useEffect(() => {
    if (Object.keys(adminData).length > 0) {
      filterHandle();
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
            <option value="CONFIRMED">Pendientes</option>
            <option value="CONCLUDED">Concluidas</option>
          </select>
          <button onClick={filterHandle}>Filtrar</button>
        </div>
        {reservations.length === 0 ? (
          <p id="notReservationsMessage">No hay reservas agendadas</p>
        ) : (
          reservations.map((reservation) => (
            <Card
              key={reservation.id}
              id={reservation.id}
              date={reservation.date}
              time={reservation.time}
              num_comensales={reservation.num_comensales}
              status={reservation.status}
              finished={finished}
              cancelled={cancelled}
              newStatus={newStatusExit}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Reservations;
