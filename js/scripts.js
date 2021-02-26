
var maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function myFunction (){
alert ("hi");
}

var y = document.getElementById("year").value;
var m = document.getElemtntById("month").value;
var d = document.getElementById("day").value;
var g = document.getElementById ("gender").value;

var YY = parseInt(y);
var MM =parseInt(m);
var DD =parseInt(d);




if (MM >= 3) {
  MM -= 2;
} else {
  MM += 10;
}
if ((MM == 11) || (MM == 12)) YY--;
var nCentury = parseInt(YY / 100);
var nYear100 = YY % 100;
var h = 0;    // day of week number
h += parseInt(DD);
h += parseInt((13 / 5) * MM - 0.2);
h += parseInt(nYear100);
h += parseInt(nYear100 / 4);
h += parseInt(nCentury / 4);
h -= parseInt(2 * nCentury);
h %= 7;
if (YY >= 1700 && YY <= 1751) {
  h -= 3;
} else {
  if (YY <= 1699) h -= 4;
}

var result = h;

//var gender = g;

//alert (result);

/*let akanName;
if (gender ==='male'){
  akanName =  maleNames[result]
} else if (gender === 'female'){
  akanName = femaleNames[result]
}else {
   akanName = "Invalid gender";
}
alert ("Your Akan name is" + akanName)*/





/*var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function myfunction(){
let gender ="male";
var CC =20, YY= 21, MM =2, DD =24;
 

const dayOfTheWeek = Math.round(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

let akanName;

if (gender='male'){
  akanName = maleNames {dayOfTheWeek}
} else if (gender = 'female'){
  akanName = femaleNames(dayOfTheWeek)https://meet.google.com/atg-xdxa-qmh
}else {
   akanName = "Invalid gender";
}

console.log("Your akan name is: " + akanName)*/

