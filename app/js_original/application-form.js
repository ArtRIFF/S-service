'use strict';
document.addEventListener('DOMContentLoaded', function () {
  let applicationForm = document.querySelector('.application__form');
 
    new JustValidate('.application__form', {
      rules: {
        name: {
          required: true,
          minLength: 2
        },
        phone: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        textarea: {
          required: true,
          maxLength: 150
        }
      },
      messages: {
        name: {
          required: "Write your name!"
      
        },
        email: {
          required: "Write your email!"
        },
        phone: {
          required: "Write your phone number!"
        },
        textarea: {
          required: "You forgot to write a massage!",
          maxLength: "Shortly please..."
        }
      },
      submitHandler: function (applicationForm) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "mail.php", true);
        let formData = new FormData(applicationForm);
        xhr.addEventListener('load', () => {
          if (xhr.readyState == 4) {
            switch (xhr.status) {
              case 200:
                console.log("We got succeed request");
                showModalResult("application sent");
                applicationForm.reset();
                break;
              case 301:
                console.log("Our request moved permanently");
                break;
              case 404:
                console.log("We don't find anything!!!");
                showModalResult("Error!");
                break;
              default:
                console.log("Error!!!");
                showModalResult("Error!");
                break;
            }
          };
        });
        xhr.send(formData);
      }
    });
    
  // result Modal
 function showModalResult (status) {
  const modalResult = document.createElement('div');
  modalResult.classList.add('modalResult');
  modalResult.innerHTML = `
  <h3 class="modalResult__text">${status}</h3>
  `;
  applicationForm.append(modalResult);
  setTimeout(() => {
    modalResult.remove();
  }, 4000);
 };

});