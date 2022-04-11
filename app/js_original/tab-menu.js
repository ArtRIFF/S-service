"use strict";
document.addEventListener('DOMContentLoaded', function () {

//tab-offer
const menu = document.querySelector('.our-services__menu'),
content = document.querySelectorAll('.our-services__content'),
tabs = document.querySelectorAll('.our-services__tab');
menu.addEventListener('click', (e) => {
tabs.forEach(item => {
item.classList.remove("active-tab");
})
showContent(e.target);
});

function showContent(tab) {
  content.forEach(item => {
    item.classList.remove("visible-content");
    if(item.dataset.aplienceParts == tab.dataset.aplienceParts) {
      item.classList.add('visible-content');
    }
    })
  tab.classList.add("active-tab");
}

  
});