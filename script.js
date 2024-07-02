function utcDateAndTime() {
  const now = new Date();
  const utcTime = now.toUTCString().slice(-12, -4);
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfTheWeek[now.getUTCDay()];

  document.getElementById("currentTimeUTC").textContent = utcTime;
  document.getElementById("currentDay").textContent = currentDay;
}

setInterval(utcDateAndTime, 1000);
utcDateAndTime();
