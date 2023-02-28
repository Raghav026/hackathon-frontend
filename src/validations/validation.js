export const validation = (values) => {
  console.log("values", values);
  console.log(values.password.length);
  const error = {};
  if (!values.name) {
    error.name = "Name is required";
  }
  if (!values.useremail) {
    error.useremail = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.useremail)) {
    error.useremail = "Email is invalid";
  }

  if (!values.password) {
    error.password = "Password is required";
  } else if (values.password.length < 6) {
    error.password = "Password must be more than 6 character";
  }
  if (values.password !== values.confirmPassword) {
    error.confirmPassword = "Password and confirm password don't match";
  }
  return error;
};
