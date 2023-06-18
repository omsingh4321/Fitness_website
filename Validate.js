let form= document.querySelector(".form");
let naam=document.querySelector("#naam");
let dob=document.querySelector("#DOB");
let height=document.querySelector("#height");
let password1=document.querySelector("#Password");
let password2=document.querySelector("#Password1");
const passw = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
form.addEventListener('submit',(e)=>{
    //Minimum eight characters, at least one letter and one number:
   //For password
let flag1,flag2,flag3;
flag1=flag2=flag3=false;
const isValid = passw.test(password1.value);
e.preventDefault();
if(password1.value!=password2.value || !isValid)
{
  
  password1.style.border='2px solid red';
  password2.style.border='2px solid red';
  flag1=false;
}
else {
    password1.style.border='';
    password2.style.border='';
    
  flag1=true;
}
//For Dob
const dateOfBirth = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/;
const isValid1 = dateOfBirth.test(dob.value);

if(!isValid1)
{
  dob.style.border='2px solid red';
  flag2=false;
}
else{
    dob.style.border='';
    flag2=true;
}
//For Height
const hyt = /^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
const isValid2 = hyt.test(height.value);
if(!isValid2)
{
  
  height.style.border="2px solid red";
  flag3=false;
}
else{
 height.style.border='';
 flag3=true;
}

 if(flag1 && flag2 && flag3) window.location.assign('main.html');

    
})