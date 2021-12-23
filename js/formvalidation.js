let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}
//show success
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}
//check if email is valid
function isValid(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLocaleLowerCase());
}

//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //if statement
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  //email
  if (email.value === "") {
    showError(email, "Email is required");
  } else {
    showSuccess(email);
  }
  //password
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  //confirm password
  if (password2.value === "") {
    showError(password2, "Password is required");
  } else {
    showSuccess(password2);
  }
});
