import "./Forms.css";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { AdminContext } from "../../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import formValidation from "../../../helpers/forms/adminLogin";
import Footer from "../../footer/Footer";

const LoginAdmin = () => {
  const [formData, setFormData] = useState({
    dni: "",
    key: "",
  });

  const [errors, setErrors] = useState({});
  const [validCreds, setValidCreds] = useState(false);

  const API = "http://localhost:3000";

  const navigation = useNavigate();

  const { adminData, setAdminData } = useContext(AdminContext);

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
    setValidCreds("");

    const validations = formValidation(formData);

    if (Object.keys(validations).length > 0) {
      setErrors(validations);
      return;
    } else {
      setErrors({});
      axios
        .post(`${API}/auth/login`, formData)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setAdminData(res.data.adminFound);
          }
        })
        .catch(() => {
          setValidCreds(true);
        });
    }
  };

  return (
    <>
      <form onSubmit={formSubmit} className="form">
        <h2>Acceder</h2>
        {validCreds && <p>Dni o Clave Incorrectos</p>}
        <p>Entra a tu dashboard</p>
        <div className="form__field loginInput">
          <label htmlFor="dni">
            {errors.dni && (
              <p className="errorMessage">El DNI debe ser de 8 digitos</p>
            )}
          </label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={inputChange}
            placeholder="DNI"
          />
        </div>
        <div className="form__field loginInput">
          <label htmlFor="dni">
            {errors.key && (
              <p className="errorMessage">Por favor ingresa la clave</p>
            )}
          </label>
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
      <Footer />
    </>
  );
};

export default LoginAdmin;
