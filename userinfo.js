let nam = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let seconds = sessionStorage.getItem("second");
let minutes = sessionStorage.getItem("minute");

document.querySelector("span.name").innerHTML = nam;
document.querySelector("span.points").innerHTML = points;

let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
document.querySelector("span.time").innerHTML = `${formatted_min}:${formatted_sec}`;
