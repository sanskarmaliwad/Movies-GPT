export const validate = (email, password, fullName) => {
  const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const testPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const testFullName = /^[A-Za-z\s]+$/.test(fullName);
  var errorMessages = {};

  if (!testEmail) errorMessages.email = "Please enter a valid email address.";
  if (!testPassword) errorMessages.password = "Please enter a valid password.";
  if (!testFullName) errorMessages.fullName = "Please enter a valid full name.";

  return errorMessages;
};
