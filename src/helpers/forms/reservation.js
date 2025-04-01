const reservationsFormValidator = (formData) => {
  const errors = {};

  const phoneFormat = /^\+[1-9][0-9]{0,2}.*/;

  const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

  const fechaActual = new Date();
  const fechaMinima = new Date(fechaActual.getTime() + 86400000);
  fechaMinima.setHours(0, 0, 0, 0);

  const fechaIngresada = new Date(formData.date);

  const timeFormat = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;

  if (formData.name.length < 3)
    errors.name = "El nombre debe contener minimo 3 caracteres";

  if (formData.surname.length < 3)
    errors.surname = "El apellido debe contener minimo 3 caracteres";

  if (!phoneFormat.test(formData.phone)) {
    errors.phone = "Ingresa un codigo pais válido";
  }

  if (Number(formData.num_comensales) < 1) {
    errors.num_comensales =
      "Debe formar parte de la reserva al menos UNA persona";
  }

  if (!dateFormat.test(formData.date)) {
    errors.date = "La fecha debe tener el formato dd-mm-aaaa";
  } else if (fechaIngresada.getTime() <= fechaActual.getTime()) {
    errors.date = "La fecha debe ser al menos un día posterior a la actual";
  }

  if (!timeFormat.test(formData.time)) {
    errors.time = "La hora debe tener el formato HH:mm";
  }

  return errors;
};

export default reservationsFormValidator;
