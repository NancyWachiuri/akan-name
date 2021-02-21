
var myCentury = parseInt(prompt("What century were you born?"));
var myYear = parseInt(prompt("What year were you born ?"));
var myMonth = parseInt(prompt("What Month were you born?"));
var myDay = parseInt(prompt("What Day were you born ?"));
var myGender = parseInt(prompt("What Gender are you?"));

var CC, YY, MM, DD, d, dayValue;
    CC= myCentury
    YY= myYear
    MM= myMonth
    DD= myDay

var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

Function= d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
var getAkanName = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;

function getAkanName () {
  let myYear = document.getElementById("year-input").value;
  let myMonth = Number(document.getElementById("month-input").value);
  let myDay = Number(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");}

  alert (d)
