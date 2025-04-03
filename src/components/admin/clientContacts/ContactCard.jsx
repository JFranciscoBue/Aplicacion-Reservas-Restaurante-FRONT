import "./ContactCard.css"

const ContactCard = ({ fullname, phone, reason, message, date }) => {
  return (
    <div className="contactsTableContainer">
      <h2>Casillero de Mensajes</h2>
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
            <td>Juan Pérez</td>
            <td>+54 11 2345 6789</td>
            <td>Cancelación</td>
            <td>Quiero cancelar mi reserva</td>
            <td>2025-03-30</td>
          </tr>
          <tr>
            <td>María Gómez</td>
            <td>+54 9 8765 4321</td>
            <td>Reprogramación</td>
            <td>¿Puedo cambiar mi horario?</td>
            <td>2025-03-29</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactCard;
