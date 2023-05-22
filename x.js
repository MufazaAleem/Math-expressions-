

// Task 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Task 2
var num1 = 10;
var num2 = 5;

// Subtraction
var sub = num1 - num2;
document.write("<br> Subtraction of " + num1 + " and " + num2 + " is " + sub);

// Multiplication
var mul = num1 * num2;
document.write("<br> Multiplication of " + num1 + " and " + num2 + " is " + mul);

// Division
var div = num1 / num2;
document.write("<br> Division of " + num1 + " and " + num2 + " is " + div);

// Modulus
var mod = num1 % num2;
document.write("<br> Modulus of " + num1 + " and " + num2 + " is " + mod);

// Task 3
var num;
document.write("<br> Value after variable declaration is: " + num);

num = 5;
document.write("<br> Initial value: " + num);

num++;
document.write("<br> Value after increment is: " + num);

num += 7;
document.write("<br> Value after addition is: " + num);

num--;
document.write("<br> Value after decrement is: " + num);

num %= 3;
document.write("<br> The remainder is : " + num);





// Shopping Cart
var item1Quantity = 3;
var item1Price = 650;
var item2Quantity = 7;
var item2Price = 100;
var shippingCharges = 100;

var totalCost = (item1Quantity * item1Price) + (item2Quantity * item2Price) + shippingCharges;
console.log("Total cost of your order is " + totalCost);

// Marks Percentage
var totalMarks = 500;
var marksObtained = 380;
var percentage = (marksObtained / totalMarks) * 100;

console.log("Percentage: " + percentage + "%");





// Marks Sheet
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

console.log("Total marks: " + totalMarks);
console.log("Marks obtained: " + marksObtained);
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Currency Conversion
var usDollar = 10;
var saudiRiyal = 25;
var usdToPkr = 104.80;
var sarToPkr = 28;
var totalPkr = (usDollar * usdToPkr) + (saudiRiyal * sarToPkr);

console.log("Total Currency in Pakistani Rupees: " + totalPkr);





// Currency in PKR
var totalCurrency = 1748;
console.log("Total Currency in PKR: " + totalCurrency);

// Arithmetic Operations
var num = 7;
num = ((num + 5) * 10) / 2;
console.log("Arithmetic Operations Result: " + num);

// Age Calculator
var currentYear = new Date().getFullYear();
var birthYear = 1990;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
console.log("They are either " + age1 + " or " + age2 + " years old.");




// Age Calculator
var currentYear = 2023;
var birthYear = 2006;
var age = currentYear - birthYear;
console.log("Current Year: " + currentYear);
console.log("Birth Year: " + birthYear);
console.log("Your Age is: " + age);

// Geometrizer
var radius = 5;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));







// Lifetime Supply Calculator
var favouriteSnack = "chocolate chip";
var currentAge = 17;
var maximumAge = 65;
var snacksPerDay = 3;
var totalSnacksNeeded = (maximumAge - currentAge) * 365 * snacksPerDay;
console.log("Favourite Snack: " + favouriteSnack);
console.log("Current age: " + currentAge);
console.log("Estimated Maximum Age: " + maximumAge);
console.log("Amount of snacks per day: " + snacksPerDay);
console.log("You will need " + totalSnacksNeeded + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge);