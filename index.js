/*let price = 10.56;
let gpa = 2.1;
console.log(price);
console.log(gpa);
console.log(`the price is $${price}`);
console.log(`Your gpa is ${gpa}`);



let firstName ="Fadalulai";
let favouritefood ="jollof";
console.log(`your name is ${firstName}`);
confirm

let gmail = "kamil@gmail.com";
console.log(`your gmail is ${gmail}`);


let online = false;
console.log(typeof online);
console.log(`Kamil is online: ${online}`)


let forSale = true;
let isStudent = true;
console.log(`is this car for sale?: ${forSale}`);


let fullName = "Ayongo Fadalulai"
let age = 22;
let isStudent = true;
/*document.getElementById("p1").textContent=fullName;
document.getElementById("p2").textContent=age;
document.getElementById("p3").textContent=isStudent;


document.getElementById("p1").textContent=`Your name is ${fullName}`;

let students = 7;
students = students % 2;
console.log(students)

let userName = window.prompt("What is your UserName");
console.log(userName);*/

let userName;

document.getElementById("mySubmit").onclick = function(){
   userName = document.getElementById("myText").value;
    console.log(userName);
    document.getElementById("myH1").textContent=`hello ${userName}`;

};

  