const contactFormValidations = (formData) => {
  const phoneRegex = /^\+\d{1,3}\s?\d+$/;

  const errors = {};

  if (formData.fullname.length < 3)
    errors.fullname = "El nombre debe tener mínimo 3 caracteres";

  if (!phoneRegex.test(formData.phone))
    errors.phone = "Ingresa un codigo pais válido";

  if (formData.reason.length === 0)
    errors.reason = "Por favor ingrea el motivo por el que nos contactas";

  if (formData.message.length < 5)
    errors.message = "El mensaje debe ser de mínimo 5 caracteres";

  return errors;
};

export default contactFormValidations;
