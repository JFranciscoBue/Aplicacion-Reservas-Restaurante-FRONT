import ContactCard from "../../components/admin/clientContacts/ContactCard";
import Footer from "../../components/footer/Footer";
import AdminNavbar from "../../components/admin/adminNavbar/AdminNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  const API = "http://localhost:3000";

  useEffect(() => {
    axios.get(`${API}/clientContacts`).then((res) => {
      const formattedContacts = res.data.map((contact) => {
        const fechaCreacion = new Date(contact.created_at);
        const dia = fechaCreacion.getDate().toString().padStart(2, "0");
        const mes = (fechaCreacion.getMonth() + 1).toString().padStart(2, "0");
        const fechaFormateada = `${dia}-${mes}`;
        return { ...contact, created_at: fechaFormateada };
      });
      setContacts(formattedContacts);
    });
  }, []);

  return (
    <div>
      <AdminNavbar />
      {contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            fullname={contact.fullname}
            phone={contact.phone}
            reason={contact.reason}
            message={contact.message}
            date={contact.created_at}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default ContactsList;
