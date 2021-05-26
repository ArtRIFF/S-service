"use strict";
document.addEventListener('DOMContentLoaded', function () {
  // Burger menu

  document.querySelector('.burger').addEventListener('click', (e) => {
    if (e.target) {
      console.log("Pret");
      e.target.classList.toggle("burger-rotate");
      e.target.classList.toggle("open");
      document.querySelector('.header-mob__nav').classList.toggle("hide");
    }
  });

});