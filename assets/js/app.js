// ==== Menu Toggle ==== //
function toggleMenu(){
  const menutoggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-menu');
  menutoggle.classList.toggle('active');
  nav.classList.toggle('active');
 
}

// ===== Change Color of navigation bar when triggered ==== //
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("header-menu");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-nav");
  current[0].className = current[0].className.replace(" active-nav", "");
  this.className += " active-nav";
  });
}

//window.onload = function(){
  //document.getElementById("loginModal").style.display="block";}


  