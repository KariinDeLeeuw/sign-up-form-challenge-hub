// - Receive an error message when the `form` is submitted if:
//   - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
//   - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

// Got button out of HTML document
const button = document.getElementById("btn");
// Added an eventlistener and a function
button.addEventListener("click", myFunction);

function myFunction() {
  let allFilled = true;
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let firstText = document.getElementById("firstText");
  let lastText = document.getElementById("lastText");
  let emailText = document.getElementById("emailText");
  let passwordText = document.getElementById("passwordText");
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (firstName === "") {
    allFilled = false;
    firstText.style.visibility = "visible";
  } 
  if (lastName === "") {
    allFilled = false;
    lastText.style.visibility = "visible";
  }
  if (email === "") {
    allFilled = false;
    emailText.style.visibility = "visible";
  } else if (!filter.test(email)){
    allFilled = false;
    emailText.innerHTML = "Looks like this is not an email";
    emailText.style.visibility = "visible";
  }

  if (password === "") {
    allFilled = false;
    passwordText.style.visibility = "visible";
  }

  if(allFilled){
    alert(`Thanks ${firstName} for enrolling!`);
    location.reload();
  }
}
