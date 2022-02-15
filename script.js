// - Receive an error message when the `form` is submitted if:
//   - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
//   - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

// Got button out of HTML document
const button = document.getElementById("btn");
// Added an eventlistener and a function
button.addEventListener("click", myFunction);

function myFunction() {
  alert("help");
}
