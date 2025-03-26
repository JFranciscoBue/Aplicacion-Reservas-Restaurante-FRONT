import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Forms.css";
import Footer from "../../footer/Footer";

const RegisterAdmin = () => {
  const API = "http://localhost:3000";

  const { adminData, setAdminData } = useContext(AdminContext);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    dni: "",
    key: "",
  });

  const navigation = useNavigate();

  useEffect(() => {
    if (Object.keys(adminData).length > 0) {
      navigation("/admin/dashboard");
    }
  }, [adminData, navigation]);

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

    axios
      .post(`${API}/auth/new`, formData)
      .then((value) => {
        setAdminData(value.data.newAdmin);
        navigation("/admin/dashboard");
      })
      .catch((e) => {
        alert(e.message);
      })
      .finally(() => {
        setFormData({
          name: "",
          surname: "",
          phone: "",
          email: "",
          dni: "",
          key: "",
        });
      });
  };

  return (
    <>
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
      <Footer />
    </>
  );
};

export default RegisterAdmin;
