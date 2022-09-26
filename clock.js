let h1 = document.querySelector('.clock h1');

function getTime(){
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  h1.innerText = `${hours < 10 ? `0${hours}` : hours}:${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

setInterval(getTime, 1000);