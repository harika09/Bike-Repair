// ==== Subscribe Section ==== //
$("#validate-btn").click(function (e) {
  /* Need Jquery to validate as script */ e.preventDefault();
  // Code goes here
  validate(); // your onclick function call here
});

function validate() {
  const email = document.getElementById("email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email == "") {
    errorEmail();
  } else if (email.match(pattern)) {
    validEmail();
  } else {
    invalidEmail();
  }
}

function errorEmail() {
  email.style.borderColor = "red";
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Email cannnot be empty",
  });
}

function validEmail() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Subscription Confirm!",
    text: "Thank you for subscribing!",
    showConfirmButton: true,
  });
  document.getElementById("email").value = " ";

  email.style.borderColor = "#ccc";
}

function invalidEmail() {
  email.style.borderColor = "red";
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Email is Invalid!",
  });
}
