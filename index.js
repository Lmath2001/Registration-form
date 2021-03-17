// Validating with help of regular expression
let incorrectUser=document.getElementById("incorrect-user");
let inputUser=document.getElementById("username");
incorrectUser.style.display="none";
inputUser.classList.remove("red-border");

let incorrectMobile=document.getElementById("incorrect-mobile");  
let inputMobile=document.getElementById("mobileno");
incorrectMobile.style.display="none";
inputMobile.classList.remove("red-border");

let incorrectPassword=document.getElementById("incorrect-password");  
let inputPassword=document.getElementById("password");
incorrectPassword.style.display="none";
inputPassword.classList.remove("red-border");


let validUsername=false;
let validPassword=false;
let validMobile=false;

//Email is already validated by HTML
console.log("Validation the form");

let username=document.getElementById("username");
username.addEventListener('blur',()=>{
  let regex=/^([a-zA-Z0-9]){2,10}$/;
  
  if(regex.test(username.value))
  {
    validUsername=true;
    incorrectUser.style.display="none";
    inputUser.classList.remove("red-border");
  }
  else{
    validUsername=false;
    incorrectUser.style.display="block";
    inputUser.classList.add("red-border");
  }
});

let password=document.getElementById("password");
password.addEventListener('blur',()=>{
  let regex =/^([0-9a-zA-Z@]){4,10}$/;
  if(regex.test(password.value)){
    validPassword=true;
    incorrectPassword.style.display="none";
    inputPassword.classList.remove("red-border");

  }else{
    validPassword=false;
    incorrectPassword.style.display="block";
    inputPassword.classList.add("red-border");
  }

});

let mobileno=document.getElementById("mobileno");
mobileno.addEventListener('blur',()=>{
  let regex=/^([0-9]{10})$/;
  if(regex.test(mobileno.value)){
    validMobile=true;
    incorrectMobile.style.display="none";
    inputMobile.classList.remove("red-border");

  }else{
    validMobile=false;
    incorrectMobile.style.display="block";
    inputMobile.classList.add("red-border");
  }
});
