const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwcheck = document.getElementById("passwcheck");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwcheckValue = passwcheck.value.trim();

  if (fullnameValue === "") {
    setErrorFor(fullname, "Full Name must be filled");
  } else {
    setSuccessFor(fullname);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email must be filled");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password must be filled");
  } else {
    setSuccessFor(password);
  }
  if (passwcheckValue === "") {
    setErrorFor(passwcheck, "Password Check must be filled");
  } else if (passwcheckValue != passwordValue) {
    setErrorFor(passwcheck, "Password doesn't match");
  } else {
    setSuccessFor(passwcheck);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function nextfield(id) {
  if (event.keyCode == 13) document.getElementById(id).focus();
}
