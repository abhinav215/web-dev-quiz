function submitUser(e){
  e.preventDefault();
  let naam = document.getElementById("username").value;

  sessionStorage.setItem("name", naam);
  location.href="page2.html";
}
