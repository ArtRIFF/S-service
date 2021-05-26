"use strict";
document.addEventListener('DOMContentLoaded', function () {

  // Mob menu
  const mobIcon = document.querySelector('.burger'),
  mobMenu = document.querySelector('.header-mob__nav');
  mobIcon.addEventListener("click", (e) => {
  mobIcon.classList.toggle("burger-rotate");
  mobIcon.classList.toggle("open");
  mobMenu.classList.toggle("hide");
  });
});