var nam = document.getElementById("nam");
var rollno = document.getElementById("rollno");
var date = document.getElementById("date");

nam.innerHTML = "Raj Sinha";
rollno.innerHTML = "201500552";

var day = new Date();
var no = day.getDate();
var month = day.getMonth()+1;
var year = day.getFullYear();

date.innerHTML = `${no}-${month}-${year}`;

console.log(`${no}-${month}-${year}`)