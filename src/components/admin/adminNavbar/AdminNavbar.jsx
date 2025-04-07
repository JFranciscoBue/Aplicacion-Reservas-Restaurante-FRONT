import "./AdminNavbar.css";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="adminNav">
      <ul className="adminNav__ul">
        <li className="adminNav__ul__li">
          <Link to="/admin/dashboard" className="adminNav__ul__li_link">
            DASHBOARD
          </Link>
        </li>
        <li className="adminNav__ul__li">
          <Link to="/reservations" className="adminNav__ul__li_link">
            RESERVAS
          </Link>
        </li>
        <li className="adminNav__ul__li">
          <Link to="/all-contacts" className="adminNav__ul__li_link">
            CASILLERO MENSAJES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
