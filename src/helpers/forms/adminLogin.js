const formValidation = (formData) => {
  const errors = {};
  if (formData.dni.length !== 8) {
    errors.dni = true;
  }

  if (!formData.key) {
    errors.key = true;
  }

  return errors;
};

export default formValidation;
