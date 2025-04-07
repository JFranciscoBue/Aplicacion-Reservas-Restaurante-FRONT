import "./ContactCard.css";

const ContactCard = ({ fullname, phone, reason, message, date }) => {
  return (
    <div className="contactsTableContainer">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Motivo</th>
            <th>Mensaje</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fullname}</td>
            <td>{phone}</td>
            <td>{reason}</td>
            <td>{message}</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactCard;
