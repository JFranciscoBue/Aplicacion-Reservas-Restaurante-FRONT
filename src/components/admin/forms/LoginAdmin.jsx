import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

const LoginAdmin = () => {
  const [formData, setFormData] = useState({
    dni: "",
    key: "",
  });

  const navigation = useNavigate();

  const { adminData } = useContext(AdminContext);

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
    alert("Formulario Creado");
  };

  return (
    <form onSubmit={formSubmit} className="form">
      <h2>Acceder</h2>
      <p>Entra a tu dashboard</p>
      <div className="form__field loginInput">
        <label htmlFor="name"></label>
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={inputChange}
          placeholder="DNI"
        />
      </div>
      <div className="form__field loginInput">
        <label htmlFor="name"></label>
        <input
          type="password"
          name="key"
          value={formData.key}
          onChange={inputChange}
          placeholder="PIN"
        />
      </div>
      <div className="form__field">
        <input type="submit" value="Acceder" />
      </div>
    </form>
  );
};

export default LoginAdmin;
