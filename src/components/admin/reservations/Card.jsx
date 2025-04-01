import "./Card.css";

const Card = ({
  id,
  date,
  time,
  num_comensales,
  status,
  finished,
  cancelled,
  newStatus,
}) => {
  return (
    <div className="reservationTable">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>FECHA</td>
            <td>HORA</td>
            <td>CANTIDAD DE PERSONAS</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{num_comensales}</td>
          </tr>
        </tbody>
      </table>
      <div className="reservationTable__reservationStatus">
        <p id="showStatus">Estado: {status}</p>
        {newStatus && <p id="statusChangedMessage">Estado cambiado!</p>}
        <button onClick={() => finished(id)}>✅ Finalizada</button>
        <button onClick={() => cancelled(id)}>❌ Cancelada</button>
      </div>
    </div>
  );
};

export default Card;
