'use strict';
document.addEventListener('DOMContentLoaded', function () {
  let xhr = new XMLHttpRequest(),
    applicationForm = document.querySelector('.application__form'),
    btnSend = document.querySelector('.application__button');
 

  btnSend.addEventListener("click", () => {
      xhr.open("POST", "mail.php", true);
      let formData = new FormData(applicationForm);
      xhr.addEventListener('load', () => {
        if (xhr.readyState == 4) {
          switch (xhr.status) {
            case 200:
              console.log("We got succeed request");
              applicationForm.reset();
              break;
            case 301:
              console.log("Our request moved permanently");
              break;
            case 404:
              console.log("We don't find anything!!!");
              break;
            default:
              console.log("Error!!!");
              break;
          }
        };
      });
      xhr.send(formData);
  
    
  });
});