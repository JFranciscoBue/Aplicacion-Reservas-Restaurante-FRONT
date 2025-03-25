import React from "react";
import { useState } from "react";
import "./Forms.css";

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    dni: "",
    key: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      dni: "",
      key: "",
    });
    alert("Formulario Creado");
  };

  return (
    <form onSubmit={formSubmit} className="form">
      <h2>Contratar nuevo administrador</h2>
      <p>Por favor Completar los datos del mismo</p>
      <div className="form__field">
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={inputChange}
          placeholder="Nombre"
        />
      </div>
      <div className="form__field">
        <label htmlFor="surname"></label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={inputChange}
          placeholder="Apellido"
        />
      </div>
      <div className="form__field">
        <label htmlFor="phone"></label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={inputChange}
          placeholder="Numero de telefono"
        />
      </div>
      <div className="form__field">
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={inputChange}
          placeholder="Correo Electronico"
        />
      </div>
      <div className="form__field">
        <label htmlFor="dni"></label>
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={inputChange}
          placeholder="Numero de Documento"
        />
      </div>
      <div className="form__field">
        <label htmlFor="key"></label>
        <input
          type="password"
          name="key"
          value={formData.key}
          onChange={inputChange}
          placeholder="PIN"
        />
      </div>
      <div className="form__field">
        <input type="submit" value="Registrar nuevo administrador" />
      </div>
    </form>
  );
};

export default RegisterAdmin;
