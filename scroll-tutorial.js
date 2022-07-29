// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logo");
  var logoimg = document.getElementById("logoimg");
  var anotlogos = document.querySelectorAll("a.navbar-anotlogo");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    anotlogos.forEach(anotlogo => {
      anotlogo.style.borderRadius = "0px";
      anotlogo.style.margin = "0";
    });
    logo.style.borderRadius = "0px";
    logo.style.width ="5%";
    navbar.style.padding = "0";
    logoimg.style.width = "50%";
    logo.style.margin = "0";
    logoimg.src = "../pictures/logo.png";
  } else {
    anotlogos.forEach(anotlogo => {
      anotlogo.style.borderRadius = "15px";
      anotlogo.style.margin = "0 30px 0 0";
    });
    logo.style.borderRadius = "15px";
    logo.style.width="15%";
    navbar.style.padding = "10px 0px";
    logoimg.style.width = "100%";
    logo.style.margin = "0 0 0 30px";
    logoimg.src = "../pictures/logo-large.png";
  }
}