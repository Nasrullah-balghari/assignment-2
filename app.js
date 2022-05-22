// VARIABLES FOR NUMBERS
// Question-1
// var age = 24; 
// alert("I am " +age+ " years old");

// Quetion- 2
// var visit = "you have visited this site N times";
// alert(visit);

// Question-3
// var birthYear = 1998;
// document.write("My birth year is "+birthYear+   " Datatype of my declared variable is "+typeof(birthYear));

// Question-4
// var name ="Nasrullah";
// var product = "dress pent";
// var quantity = 4;
// document.write(name + " ordered " +quantity+ " "+ product+"(s) on XYZ Clothing store");


// VARABLE LEGAL AND ILLEGAL
// Question-1
var num1,num2,num3;

// Question-2
legal
var $name;
var _name;
var fistName;
var first_name_last_name;
illegal
// var 1name;
// var %name;
// var *abc122;
// var abc#;

// Question-3
document.write("<h4>Rules for naming JS variables</h4>");
document.write("___________________________________________________________________")
document.write("<br>")
document.write("Variable names can only contain,numbers,letters,$ and _.for example:$my,_1stVariable");
document.write("<br>");
document.write("Variable must begin with a letter,$ or _.For example:$name,_name or name")
document.write("<br>");
document.write("Variable names are case sensitive")
document.write("<br>");
document.write("Variable names should not be JS keywords")
document.write("<br>")
document.write("------------------------------------------------------------------------------------------------------")



// MATH EXPRESSIONS
// Question-1
// Addition
var num1 = +prompt("Enter your first number")
var opt = prompt("Enter your operator","+-/*")
var num2 = +prompt("Enter your second number")
var result = num1 + num2;
document.write("Sum of your number is " +result)
document.write("<br>")
// Question-2
// Subtraction
var num1 = +prompt("Enter your first number")
var opt = prompt("Enter your operator","+-/*")
var num2 = +prompt("Enter your second number")
var result = num1 - num2;
document.write("Subtract of your number is " +result)
document.write("<br>")
// multiplication
var num1 = +prompt("Enter your first number")
var opt = prompt("Enter your operator","+-/*")
var num2 = +prompt("Enter your second number")
var result = num1 * num2;
document.write("Multiplication of your number is " +result)
document.write("<br>")
// divide
var num1 = +prompt("Enter your first number")
var opt = prompt("Enter your operator","+-/*")
var num2 = +prompt("Enter your second number")
var result = num1 / num2;
document.write("Divide of your number is " +result)
document.write("<br>");


// Question-3
var a;
a = "Value after variable declaration is undefined"
document.write(a)
document.write("<br>")
var num = 5;
document.write("Initial value: "+num);
document.write("<br>")
num++;
document.write("Value after increment is: "+num);
document.write("<br>")
var add = num + 7;
document.write("Value after addition is: " +add);
document.write("<br>");
add--;
document.write("Value after decrement is : " +add);
document.write("<br>");
var remainder = 12 % 3;
document.write("The remainder is : " +remainder);


// Question-4
var ticketPrice = 600;
costOfBuying5Ticket = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is "+costOfBuying5Ticket+"PKR")


// Question-5
var num = + prompt("Enter number to get table!")
document.write("Table of the number you have entered!")
document.write("<br>")
document.write(num+" x 1"+" = " +num*1);
document.write("<br>")
document.write(num+" x 2"+" = "+num*2);
document.write("<br>")
document.write(num+" x 3"+" = "+num*3);
document.write("<br>")
document.write(num+" x 4"+" = "+num*4);
document.write("<br>")
document.write(num+" x 5"+" = "+num*5);
document.write("<br>")
document.write(num+" x 6"+" = "+num*6);
document.write("<br>")
document.write(num+" x 7"+" = "+num*7);
document.write("<br>")
document.write(num+" x 8"+" = "+num*8);
document.write("<br>")
document.write(num+" x 9"+" = "+num*9);
document.write("<br>")
document.write(num+" x 10"+" = "+num*10);
document.write("<br>")


// Question-6
var celsius = +prompt("Enter in Celsius")
var fahrenheit =(celsius *9/5) + 32;
document.write(celsius+ "<sup>0</sup>"+"C "+"is "+fahrenheit+"<sup>0</sup>"+"F")
document.write("<br>")
var fahrenheit = +prompt("Enter in Fahrenheit")
var celsius =(fahrenheit - 32) * 5/9;
document.write(fahrenheit+ "<sup>0</sup>"+"F "+"is "+celsius+"<sup>0</sup>"+"C")
document.write("<br>")


// Question-7
var priceOfItem1 = 650;
var quantityOfItem1 = 3;
var priceOfItem2 = 100;
var quantityOfItem2 = 7;
var shippingCharges = 100;
var result = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges
document.write("Price of item 1 is "+priceOfItem1)
document.write("<br>");
document.write("Quantity of item 1 is " +quantityOfItem1);
document.write("<br>");
document.write("Price of item 2 is  " +priceOfItem2)
document.write("<br>");
document.write("Quatity of item 2 is " + quantityOfItem2);
document.write("<br>");
document.write("Shipping Charges " +shippingCharges);
document.write("<br>");
document.write("Total cost of your order is " +result);


// Question-8
var totalMark = 980;
var markObtain = 804;
var percentage = (markObtain/totalMark) * 100;
document.write("Total marks: "+totalMark +"<br>");
document.write("Marks obtained: " +markObtain+"<br>");
document.write("Percentage: " +percentage+"%"+"<br>");


// Question-9
document.write("Total Currency in PKR: " +((10 * 104.80) + (25 * 28)));


// Question-10
var num = 50;
document.write((num + 5)+ "<br> " +" " +(num * 10)+"<br> "+" "+(num/2));

// Question-11
var currentYear = 2022;
var birthYear = 1998;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1>")
document.write("Current Year: "+currentYear +"<br>");
document.write("Birth Year is: "+birthYear +"<br>");
document.write("Your Age is: "+age);


// Question-12
var radius = 20;
var pi = 3.142;
var circumference = (2 * pi * radius);
var area = (20 * 20) * pi;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: "+radius);
document.write("<br>");
document.write("The circumference is: "+circumference);
document.write("<br>");
document.write("The area is: "+area);


//Question-13
var favriteSnak = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var snaksPerDay = 3;
var totalNeedOfSnack = (maxAge - currentAge) * 3;
document.write("<h1>The Lifetime Supply Calculator</h1>"+"<br>");
document.write("Favourite Snack: "+favriteSnak+"<br>");
document.write("Current age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+snaksPerDay+"<br>");
document.write("You will need "+totalNeedOfSnack+" chocolate chip to last you until the ripe old age of "+maxAge);




