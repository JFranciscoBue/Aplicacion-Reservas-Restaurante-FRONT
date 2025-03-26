import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="reservations">
      <h2>Hace tu reserva ahora y disfruta del menu mas rico</h2>
      <p>Completa los datos</p>
      <form className="reservationsForm">
        <div className="reservationsForm__field">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="reservationsForm__field">
          <label htmlFor="surname">Apellido</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div className="reservationsForm__field">
          <label htmlFor="phone">Numero de teléfono</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
