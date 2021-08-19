window.onload = function(){
  show(0)
}


let sawal = [
  {
    id: 1,
    question: "What is full form of PDF ?",
    answer: "Portable Document Format",
    options: [
      "Printed Document Format",
      "Public Document Format",
      "Portable Document Format",
      "Published Document Format"
    ]
  },
  {
    id: 2,
    question: "What is the full form of IC ?",
    answer: "Integrated Circuit",
    options: [
      "Interrelated Circuit",
      "Integrated Conductor",
      "Integrated Conductor",
      "Integrated Circuit"
    ]
  },
  {
    id: 3,
    question: "What is full form of PHP ",
    answer: "Hypertext Preprocessor",
    options: [
      "Processor Hypertext Program",
      "Hypertext Preprocessor",
      "Pre Hypertext Processor",
      "Pre Processor Hypertext"
    ]
  },
  {
    id: 4,
    question: "What is full form of BMP ?",
    answer: "Bit map",
    options: [
      "Byte map",
      "Bit map",
      "Byte map process",
      "Bit map process"
    ]
  },
  {
    id: 5,
    question: "What is meaning of FORTRAN ?",
    answer: "Formula translation",
    options: [
      "Formula train",
      "Formula train network",
      "Formula translation",
      "Formula translation network"
    ]
  },
  {
    id: 6,
    question: "What is full form of ISDN ??",
    answer: "Integrated Services Digital Network",
    options: [
      "Integrated Server Digital Network",
      "Inter Services Digital Network",
      "Integrated Services Double Network",
      "Integrated Services Digital Network"
    ]
  },
  {
    id: 7,
    question: " What is full form of ROM ?",
    answer: "Read only memory",
    options: [
      "Read only memory",
      "Read other memcache",
      "Read other memory",
      "Read only memcache"
    ]
  },
  {
    id: 8,
    question: "What is full form of USB ?",
    answer: "Universal Serial Bus",
    options: [
      "Unicoded Smart Bus",
      "Universal Smart Bus",
      "Unicoded Serial Bus",
      "Universal Serial Bus"
    ]
  },
  {
    id: 9,
    question: "In terms of network what is meaning of SAP ?",
    answer: "Service Access Point",
    options: [
      "Smart Access Point",
      "Service Access Point",
      "Service At Point",
      "Service Access Permission"
    ]
  },
  {
    id: 10,
    question: "What is full form of CSS ?",
    answer: "Cascading Style Sheets",
    options: [
      "Creative Style Shots",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Cascading Style Shots"
    ]
  }
]



let id=0;
let point=0;

function next(){

  let choice = document.querySelector("li.option.active").innerHTML;
  if (choice == sawal[id].answer){
    point=point+10;
    sessionStorage.setItem("points", point)
  }
  
  if(id  == sawal.length-1){
    sessionStorage.setItem("second", second);
    sessionStorage.setItem("minute", minute);
    window.location.href="page3.html";
    return;
  }

  id++;
  show(id);
}

function show(id){
  let question = document.getElementById("question");
  question.innerHTML =`<h2>Q. ${sawal[id].question}</h2>
  <div class="opt">
  <ul class="list">
  <li class="option">${sawal[id].options[0]}</li>
  <li class="option">${sawal[id].options[1]}</li>
  <li class="option">${sawal[id].options[2]}</li>
  <li class="option">${sawal[id].options[3]}</li>
  </ul>
  </div>
  `;
  toggleActive();
}

function toggleActive(){
  let option = document.querySelectorAll("li.option");
  for(let i=0;i<option.length; i++){
    option[i].onclick = function(){
      for(let j=0;j<option.length; j++){
        if (option[j].classList.contains("active")){
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  } 
}