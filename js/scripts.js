window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


function nameGenerator(event){
        event.preventDefault();
        console.log ("Form is submitted")
        let year= document.getElementById("# Year").value;
        console.log("year", year);

        let Month= document.getElementById("#month").value;
        let day = document.getElementById("#day").value;

        if (year < 1900) {
            console.log("Error!");
          } else if (year < 2100) {
            console.log("Proceed!");
          } else {
            console.log("Error!");
          }

          if (month < 1) {
            console.log("Error!");
          } else if (month < 13) {
            console.log("Proceed!");
          } else {
            console.log("Error!");
          } 

          if (day < 1) {
            console.log("Error!");
          } else if (day < 32) {
            console.log("Proceed!");
          } else {
            console.log("Error!");
          }
        // run a function here

}

let myform = document.querySelector("#nameGeneratorForm");
myform.style.color = "red"
myform.addEventListener("submit", generate);


var CC, YY, MM, DD, d, dayValue;
    YY= Year
    MM= Month
    DD= Day
   var cc = year/100

   


var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

  


alert (nameGenerator);
   
