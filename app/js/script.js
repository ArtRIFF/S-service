"use strict";document.addEventListener("DOMContentLoaded",function(){document.addEventListener("scroll",()=>{let e=document.querySelector(".procent");200<window.scrollY?e.innerHTML=96+window.scrollY-280:e.innerHTML="80"});const t=document.querySelector(".burger"),o=document.querySelector(".header-mob__nav");t.addEventListener("click",e=>{t.classList.toggle("burger-rotate"),t.classList.toggle("open"),o.classList.toggle("header-mob__nav__show")});function i(e){return 0<=e&&e<10?"0"+e:e}!function(e,r){const t=document.querySelector(e),s=t.querySelector("#days"),c=t.querySelector("#hours"),a=t.querySelector("#minutes"),d=t.querySelector("#seconds"),l=setInterval(o,1e3);function o(){var e,t,o,n,n=(e=r,t=Date.parse(e)-Date.parse(new Date),o=Math.floor(t/864e5),n=Math.floor(t/1e3%60),e=Math.floor(t/1e3/60%60),{total:t,days:o,hours:Math.floor(t/36e5%24),minutes:e,seconds:n});s.innerHTML=i(n.days),c.innerHTML=i(n.hours),a.innerHTML=i(n.minutes),d.innerHTML=i(n.seconds),n.total<=0&&clearInterval(l)}o()}(".timer","2022-02-02");const e=document.querySelectorAll("[data-modal]"),n=document.querySelector(".modal");function r(){n.classList.add("hide"),n.classList.remove("show"),document.body.style.overflow=""}function s(){n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden"}e.forEach(e=>{e.addEventListener("click",s)}),n.addEventListener("click",e=>{e.target!==n&&""!=e.target.getAttribute("data-close")||r()}),document.addEventListener("keydown",e=>{"Escape"===e.code&&n.classList.contains("show")&&r()})});