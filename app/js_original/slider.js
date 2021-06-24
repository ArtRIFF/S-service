   
   document.addEventListener('DOMContentLoaded', function () {
     // Slider
     const prevBtn = document.querySelector('.services__slider__prev'),
     nextBtn =document.querySelector('.services__slider__next'),
     cardsField = document.querySelector('.services__slider__cards');
     let positionSlide = 0,
     cardsLength = document.querySelectorAll('.services__slider__card').length*320;
     
     function changePositionSlide (positionSlide) {
      cardsField.style.transform = `translateX(-${positionSlide}px)`;
     };

     nextBtn.addEventListener("click", () => {
        positionSlide += 320; 
        if (positionSlide >= cardsLength) {
          positionSlide = 0;
        }
       changePositionSlide (positionSlide);
      });

      prevBtn.addEventListener("click", () => {
        if (positionSlide > 0) {
          positionSlide -= 320; 
        } else {
          positionSlide = cardsLength-320;
        }
         changePositionSlide (positionSlide);
       });

   });