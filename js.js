const sek = document.querySelector('.s'),
      min = document.querySelector('.m'),
      hour = document.querySelector('.h'),
      twoHour = document.querySelector('.hours'),
      twoMin = document.querySelector('.minutes');
      twoSec = document.querySelector('.seconds');
      // twoSec = document.querySelector('.seconds');
      


// console.log(sek, min, hour);    

function soat() {
  let vaqt = new Date();
  let rHour = vaqt.getHours();
  let rMin = vaqt.getMinutes();
  let rSec = vaqt.getSeconds();

  twoHour.innerHTML = rHour
  twoMin.innerHTML = rMin
  twoSec.innerHTML = rSec

  setTimeout( function() {soat()},1000)
}
soat();
// console.log(rHour,rMin,rSec);