setInterval(greet,1000);

let second = 0;
let minute=0;

function greet(){


  if (second<59){
    second+=1
  }
  if(second==60){
    second=0;
    minute+=1;
  }
  
  let formatted_sec = second < 10 ? `0${second}`: `${second}`;
  let formatted_min = minute < 10 ? `0${minute}`: `${minute}`;
  document.querySelector("span.time").innerHTML = `${formatted_min}:${formatted_sec}`;
}