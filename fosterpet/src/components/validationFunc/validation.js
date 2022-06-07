export function validation(name, value, setInput, id, input) {
  let errorMessage;

  if (name === "name" && value.length === 0) errorMessage = "Name is required";
  if (name === "lastname" && value.length === 0)
    errorMessage = "Last Name is required";
  if (name === "mail" && value.length === 0) errorMessage = "Mail is required";
  else if (
    name === "mail" &&
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
  )
    errorMessage = "Invalid Mail";
  if (
    (name === "password" || name === "oldPassword" || name === "newPassword") &&
    value.length === 0
  )
    errorMessage = "Password is required";
  else if (
    (name === "password" || name === "oldPassword" || name === "newPassword") &&
    !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value)
  )
    errorMessage =
      "Between 8 and 16 characters (Uppercase, Lowercase, Numbers)";
  if (name === "location" && value.length === 0)
    errorMessage = "Location is required";

  if (
    (name === "temporaryName" ||
      name === "type" ||
      name === "age" ||
      name === "size" ||
      name === "gender" ||
      name === "description" ||
      name === "image" ||
      name === "location") &&
    value.length === 0
  )
    errorMessage = `${name} is required`;
  if (errorMessage) {
    let arr = input;
    arr[id] = { ...input[id], error: true, errorMessage };
    setInput([...arr]);
  }

  // return errorMessage;
}
