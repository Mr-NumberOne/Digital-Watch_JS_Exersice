var flag = true;
var startedTimer;

function StartTimer() {
  let date = new Date();
  var secondsT = document.getElementById("seconds");
  var hoursT = document.getElementById("hours");
  var minutesT = document.getElementById("minutes");
  var PmAm = document.getElementById("PmAm");
  // date = date.now();
  secondsT.value = date.getSeconds();
  minutesT.value = date.getMinutes();
  var temp = date.getHours();
  if (temp > 12) {
    hoursT.value = temp - 12;
    PmAm.innerHTML = "Pm";
  } else {
    if (temp == 0) {
      hoursT.value = 12;
    } else {
      hoursT.value = temp;
    }
    PmAm.innerHTML = "Am";
  }
}

setInterval(StartTimer, 1000);
