'use strict';
const secondHand = document.querySelector('.secondHand');
const minHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
  const nowDate = new Date();
  const nowSeconds = nowDate.getSeconds();
  const secondDegrees = ((nowSeconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  

  const min = nowDate.getMinutes();
  const minDegrees = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = nowDate.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate, 1000);