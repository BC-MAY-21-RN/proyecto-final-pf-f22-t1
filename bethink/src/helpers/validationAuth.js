export const validationLogin = (email, password) => {
  if (email.length === 0) {
    return false;
  }
  if (password.length === 0) {
    return false;
  }
  return true;
};

export const validationRegister = (name, email, password) => {
  if (name.length === 0) {
    return false;
  }
  if (email.length === 0) {
    return false;
  }
  if (password.length === 0) {
    return false;
  }
  return true;
};
