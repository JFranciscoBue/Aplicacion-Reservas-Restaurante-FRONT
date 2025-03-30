import "./ReservationForm.css";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    num_comensales: "",
    date: "",
    time: "",
  });

  const navigation = useNavigate();

  const API = "http://localhost:3000";

  const [formSending, setFormSending] = useState(false);
  const [exitSchedule, setExitSchedule] = useState(null);
  const [failedSchedule, setFailedSchedule] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSending(true);
    setExitSchedule(false);
    setFailedSchedule(false);

    axios
      .post(`${API}/reservations/schedule`, formData)
      .then((res) => {
        if (res.status === 201) {
          setExitSchedule(true);
          setTimeout(() => {
            navigation("/");
          }, 3000);
        }
      })
      .catch((e) => {
        console.error(e);
        setExitSchedule(false);
        setFailedSchedule(true);
        setFormData({
          name: "",
          surname: "",
          phone: "",
          num_comensales: "",
          date: "",
          time: "",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setFormSending(false);
        }, 3000);
      });
  };

  return (
    <>
      <div className="reservationForm-container">
        <div className="reservationForm-container__head">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1996/1996055.png"
            alt=""
          />
          <h2>Hace tu Reserva ahora y disfruta del mejor menú</h2>
        </div>
        {exitSchedule && (
          <p id="reservationScheduleMessage">Reserva realizada correctamente</p>
        )}
        {failedSchedule && (
          <p id="reservationScheduleMessage">
            No se ha podido agendar la reserva. Intentalo de nuevo
          </p>
        )}
        <div className="reservationForm-container__body">
          <img
            className="reservationForm-container__calendarImg"
            src="https://png.pngtree.com/png-clipart/20250101/original/pngtree-2025-cute-calendar-design-hand-drawn-rainbow-flowers-theme-png-image_18976237.png"
            alt=""
          />
          <form className="reservationForm" onSubmit={handleFormSubmit}>
            <h3>Completa los siguientes datos</h3>
            <div className="reservationForm__field">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="surname">Apellido</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="phone">Telefono</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="num_comensales">Cantidad de personas</label>
              <input
                type="number"
                name="num_comensales"
                value={formData.num_comensales}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="date">Dia</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="time">Hora</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
            <button type="submit" id="reservationButton">
              {formSending ? "Reservando..." : "Reservar"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationForm;
