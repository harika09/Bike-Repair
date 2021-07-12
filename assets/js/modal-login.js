// Modal Login
var loginmodal = document.getElementById("loginModal");
var btn = document.getElementById("login-btn");
const loginclosed = document.getElementById("closed");

btn.onclick = function () {
  loginmodal.style.display = "block";
};

loginclosed.onclick = function () {
  document.getElementById("loginModal").style.display = "none";
};

//Modal Register
const register = document.getElementById("register");
const registerModal = document.getElementById("registerModal");
const registerclosed = document.getElementById("register-closed");

register.onclick = function () {
  loginmodal.style.display = "none";
  registerModal.style.display = "block";
};

registerclosed.onclick = function () {
  document.getElementById("registerModal").style.display = "none";
};

//window.onclick = function(event){ // clicking outside the form will automatically hide the form
// if(event.target == modal){
//  modal.style.display = "none";
// }
//}

//Validation

$("#btn-login").click(function (e) {
  e.preventDefault();

  validation(); //Validate UserName and Password
});

function validation() {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("password").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email == "") {
    EmptyEmailError();
  } else if (email.match(pattern)) {
    validEmail();
  } else {
    InvalidEmail();
  }

  if (pass == "") {
    EmptyPassword();
  }
}

function EmptyEmailError() {
  email.style.borderColor = "red";
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Email cannnot be empty",
  });
}

function InvalidEmail() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Email is invalid",
  });
}

function EmptyPassword() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Password cannot be empty",
  });
}

function validEmail() {
  // const email = document.getElementById("login-email").value;
  //const loginText = document.getElementById("login-btn");

  //loginText.innerHTML = email;
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Subscription Confirm!",
    text: "Thank you for subscribing!",
    showConfirmButton: true,
  });
}
