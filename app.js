// Write a loop to print numbers from 1 to 10.
document.write("numbers from 1 to 10" + "<br>");
for( var i = 0 ; i < 10 ; i++){
    document.write( i , "<br>")
}

document.write("<br>");

//Write a loop to print even numbers from 1 to 20.
document.write("even numbers from 1 to 20" + "<br>");
for(var i = 1; i <= 20; i++){
    if(i % 2 === 0){
        document.write( i , "<br>")
    }
}

document.write("<br>");

//Write a loop to print odd numbers from 1 to 15
document.write("odd numbers from 1 to 15" + "<br>");
for(var i = 1; i <= 15; i++){
    if(i % 2 === 1){
        document.write( i , "<br>")
    }
}

document.write("<br>");

//Write a loop to calculate and print the factorial of a number (let's say 5).
// document.write("print the factorial of a number" + "<br>");

// var number = +prompt("input your number");
// var factorial = +prompt("factorial of");

// for(var i = 1; i<= number; i++){
//     factorial *= i;
// }

// document.write("The factorial of " + number + " is " + factorial);

// document.write("<br>");
document.write("<br>");

//Write a loop to print the multiplication table of a number (let's say 7) up to 10.
document.write("table of 8 " + "<br>");

for(var i = 1; i <= 10; i++){
    document.write('8 * ' + i + ' = ' + (i * 8) + "<br>")
}

document.write("<br>");

//Write a loop to print the Fibonacci series up to the 10th term.
document.write("Fibonacci series up to the 10th term" + "<br>");

var a = 0;
var b = 1;

for (let i = 1; i <= 10; i++) {
    var c = a + b;
    document.write(c + "<br>")
    a = b;
    b = c;
}

document.write("<br>");

//Write a loop to print the reverse of a string (let's say "hello").
document.write("Reverse of a string" + "<br>");

var string = "HELLO";
var reverseString = "";

for(var i = string.length -1 ; i>=0 ; i--){
    reverseString += string[i];
}
document.write(reverseString)


