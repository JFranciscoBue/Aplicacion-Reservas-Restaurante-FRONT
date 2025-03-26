import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    num_comensales: "",
    date: "",
    time: "",
  });

  const [client, setClient] = useState({});
  const [reservation, setReservation] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const { name, surname, phone } = formData;
    setClient({ name, surname, phone });
    const { num_comensales, date, time } = formData;
    setReservation(num_comensales, date, time, client);
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
            Reservar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ReservationForm;
