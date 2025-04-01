import "./ReservationForm.css";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import reservationsFormValidator from "../../helpers/forms/reservation";

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSending(true);
    setExitSchedule(false);
    setFailedSchedule(false);

    console.log(e.target.date.value);

    const validations = reservationsFormValidator(formData);

    if (Object.keys(validations).length > 0) {
      setErrors(validations);
      setFailedSchedule(true);
      setFormSending(false);
      return;
    } else {
      axios
        .post(`${API}/reservations/schedule`, {
          ...formData,
          num_comensales: Number(formData.num_comensales),
        })
        .then((res) => {
          if (res.status === 201) {
            setTimeout(() => {
              setExitSchedule(true);
            }, 2000);
            setTimeout(() => {
              navigation("/");
            }, 4000);
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
          setFormSending(false);
        })
        .finally(() => {
          setTimeout(() => {
            setFormSending(false);
          }, 2000);
        });
    }
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
              {errors.name && <p>{errors.name}</p>}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="surname">Apellido</label>
              {errors.surname && <p>{errors.surname}</p>}
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="phone">Telefono</label>
              {errors.phone && <p>{errors.phone}</p>}
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="num_comensales">Cantidad de personas</label>
              {errors.num_comensales && <p>{errors.num_comensales}</p>}
              <input
                type="number"
                name="num_comensales"
                value={formData.num_comensales}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="date">Dia</label>
              {errors.date && <p>{errors.date}</p>}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="reservationForm__field">
              <label htmlFor="time">Hora</label>
              {errors.time && <p>{errors.time}</p>}
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
