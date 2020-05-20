// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logo")
  var logoimg = document.getElementById("logoimg");
  var anotlogo = document.querySelector("a.navbar-anotlogo")
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    anotlogo.style.margin = "0";
    anotlogo.style.borderRadius = "0px";
    logo.style.borderRadius = "0px";
    navbar.style.padding = "0";
    logoimg.style.width = "50%";
    logo.style.margin = "0";
  } else {
    anotlogo.style.margin = "18px 15px 0 0";
    anotlogo.style.borderRadius = "15px";
    logo.style.borderRadius = "15px";
    navbar.style.padding = "10px 0px";
    logoimg.style.width = "100%";
    logo.style.margin = "0px 0px 0px 30px";
  }
}


function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}