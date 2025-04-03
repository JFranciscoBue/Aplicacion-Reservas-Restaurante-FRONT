import ContactCard from "../../components/admin/clientContacts/ContactCard";
import Footer from "../../components/footer/Footer";
import AdminNavbar from "../../components/admin/adminNavbar/AdminNavbar";

const ContactsList = () => {
  return (
    <div>
      <AdminNavbar />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default ContactsList;
