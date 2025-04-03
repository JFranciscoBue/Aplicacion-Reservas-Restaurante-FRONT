import "./ReservationForm.css";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import Header from "../../components/navbar/Header";
import { useNavigate } from "react-router-dom";
import contactFormValidations from "../../helpers/forms/contact";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sendingForm, setSendingForm] = useState(false);
  const navigation = useNavigate();

  const API = "http://localhost:3000";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setSendingForm(true);
    e.preventDefault();

    const validations = contactFormValidations(formData);

    if (Object.keys(validations).length > 0) {
      setErrors(validations);
      setSendingForm(false);
      return;
    } else {
      axios
        .post(`${API}/clientContacts`, formData)
        .then((res) => console.log(res.data))
        .catch((e) => console.error(e))
        .finally(() => {
          setTimeout(() => {
            setSendingForm(false);
          }, 2000);
          setTimeout(() => {
            navigation("/");
          }, 3000);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="reservationForm-container">
        <form className="reservationForm" onSubmit={handleSubmit}>
          <h3>CONTACTANOS</h3>
          <div className="reservationForm__field">
            <label htmlFor="fullname">Nombre y Apellido</label>
            {errors.fullname && <p>{errors.fullname}</p>}
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
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
            <label htmlFor="reason">Motivo de la solicitud</label>
            {errors.reason && <p>{errors.reason}</p>}
            <select
              id="motivo"
              value={formData.reason}
              onChange={handleChange}
              name="reason"
            >
              <option value="">-</option>
              <option value="CANCEL">Cancelar reserva</option>
              <option value="RESCHEDULE">Reprogramar reserva</option>
              <option value="OTHER">Otro</option>
            </select>
          </div>
          <div className="reservationForm__field">
            <label htmlFor="message">Mensaje</label>
            {errors.message && <p>{errors.message}</p>}
            <textarea
              name="message"
              id=""
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button id="sendContactFormButton">
            {sendingForm ? "Enviando..." : "ENVIAR"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
