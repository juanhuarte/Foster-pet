export function validation(name, value) {
  //   console.log("entre", name, value);
  let errorMessage;
  //let errors = {};
  if (name === "name" && value.length === 0) errorMessage = "Name is required";
  if (name === "lastname" && value.length === 0)
    errorMessage = "Last Name is required";
  if (name === "mail" && value.length === 0) errorMessage = "Mail is required";
  else if (
    name === "mail" &&
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
  )
    errorMessage = "Invalid Mail";
  if (name === "password" && value.length === 0)
    errorMessage = "Password is required";
  else if (
    name === "password" &&
    !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value)
  )
    errorMessage =
      "Between 8 and 16 characters (Uppercase, Lowercase, Numbers)";
  if (name === "location" && value.length === 0)
    errorMessage = "Location is required";
  return errorMessage;
}
