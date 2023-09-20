//text change

function textChange() {
    document.getElementById('h2').innerHTML = "Hello World"
}

// Show date

function showDate() {
    document.getElementById('d_h2').innerHTML = Date();
}

// Bulb on/off

function bulbOn() {
    document.getElementById('img').src = "images/on.gif"
}

function bulbOff() {
    document.getElementById('img').src = "images/off.gif"
}

// Font Change

function fontChange() {
    document.getElementById('f_h2').style.fontSize = "60px";
}

// Color change
function colorChange() {
    document.getElementById('col_h2').style.color = "violet";
}

// show/hide

function show() {
    document.getElementById('c_h2').style.display = "block";
}

function hide() {
    document.getElementById('c_h2').style.display = "none";
}

// Document.Write

function writeOutput() {
    document.write('Hello World');
}

// Window.Alert

function windowAlert() {
    window.alert('Hello World');
}

// clog

function cLog() {
    console.log("Hello World");
}

// variable

var number1 = 10
var number2 = 50
var data = number1 + number2

function vOutput() {
    document.getElementById('v_h2').innerHTML = data;
    document.getElementById('vr_h2').innerHTML = number1 - number2;
}

// Print this page

function windowPrint() {
    window.print();
}

// Let Output

let number3 = 10;
let number4 = 20;
let data1 = number3 * number4;

function letOutput() {
    document.getElementById('let_h2').innerHTML = data1;
}

// Let Output

let number5 = 10
let number6 = 20
let data2 = number6 / number5

function letOutput1() {
    document.getElementById('let1_h2').innerHTML = data2;
}

// Const Output

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars[1] = "volvo";
cars[2] = "BMW";
cars.push("Audi");

function constOutput() {
    document.getElementById('con_h2').innerHTML = cars;
}

// Operator

let a = 10;
let b = 20;
let c = 20;
let x = (a + b) * c;

function operator() {
    document.getElementById('op_h2').innerHTML = x;
}

// Operator

let a1 = 10;
a1 += 20;

function operator2() {
    document.getElementById('op2_h2').innerHTML = a1;
}

//String Operator

let text1 = 100;
let text2 = 20;
let result = text1 > text2;

function operator3() {
    document.getElementById('op3_h2').innerHTML = "is 100 is greater than 20 ?" + result;
}

//Arithmetic Operator

let x1 = 10;
x1++;
let z1 = x1

function increment() {
    document.getElementById('op4_h2').innerHTML = z1;
}

// Math Pow

let x2 = 6

function mathPow() {
    document.getElementById('op5_h2').innerHTML = Math.pow(x2, 3);
}

// Left shift assignment

let x3 = -100;
x3 <<= 5;

function leftAssignment() {
    document.getElementById('left_h2').innerHTML = "the value of x is:" + x3;
}

// Right shift assignment

let x4 = -100;
x4 >>= 5;

function rightAssignment() {
    document.getElementById('right_h2').innerHTML = "the value of x is:" + x4;
}

// Bitwise assignment

let x5 = 100;
x5 &= 5;

function bitwiseAssignment() {
    document.getElementById('bit_h2').innerHTML = "the value of x is:" + x5;
}

// Logical and assignment

let x6 = 100;
x6 && = 5;

function logicalAssignment() {
    document.getElementById('log_h2').innerHTML = "the value of x is:" + x6;
}

// Bitwise OR assignment

let x7 = 10;
x7 |= 2;

function bitwiseorAssignment() {
    document.getElementById('bitor_h2').innerHTML = "the value of x is:" + x7;
}

// Logical and assignment

let x8 = 20;
x8 || = 5;

function logicalorAssignment() {
    document.getElementById('logor_h2').innerHTML = "the value of x is:" + x8;
}

// Nullish Coalescing Assignment

let x9;
x9 ? ? = 50;

function nullishAssignment() {
    document.getElementById('null_h2').innerHTML = x9;
}

// Farenheit To Celsius

let value = toCelsius(96);

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}
document.getElementById("cel_h2").innerHTML = value;

// Objects

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

function objects() {
    document.getElementById("ob_h2").innerHTML = "The car color is " + car.color;
}

// Strings Method

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function stringMethod() {
    document.getElementById("sm_h2").innerHTML = text.length;
}

// Strings Search

let text3 = "Please locate where 'locate' occurs!";
let index = text3.lastIndexOf("locate");

function stringSearch() {
    document.getElementById("ss_h2").innerHTML = index;
}

// Floating Point Precision

let y2 = 0.2 + 0.1;

function pointPrecision() {
    document.getElementById('pp_h2').innerHTML = "0.3+0.5=" + y2;
}

// Not a number

let y3 = 100 / "Apple";

function notNumber() {
    document.getElementById('nan_h2').innerHTML = isNaN(y3);
}

// Type of Nan

let y4 = NaN;

function typeNan() {
    document.getElementById('nan1_h2').innerHTML = typeof y4;
}

// Infinity Number

let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + "<br>";
}

function infinity() {
    document.getElementById("in_h2").innerHTML = txt;

}

// Hexadecimal

let y5 = 0xFF;

function hexadecimal() {
    document.getElementById("h_h2").innerHTML = "0xFF = " + y5;
}

// Expotential Method

let y6 = 9.656;

function expoMethod() {
    document.getElementById("ex_h2").innerHTML =
        x.toExponential() + "<br>" +
        x.toExponential(3) + "<br>" +
        x.toExponential(5) + "<br>" +
        x.toExponential(7);
}

// TO fixed Method

let y7 = 7.656;

function fixedMethod() {
    document.getElementById("fx_h2").innerHTML =
        y7.toFixed(0) + "<br>" +
        y7.toFixed(1) + "<br>" +
        y7.toFixed(2) + "<br>" +
        y7.toFixed(3);
}

// Epsilon Property

let y8 = Number.EPSILON;

function epsilon() {
    document.getElementById("ep_h2").innerHTML = y8;
}

// Max_value

let y9 = Number.MAX_VALUE;

function maxValue() {
    document.getElementById("max_h2").innerHTML = y9;
}

// xMax_value

let x10 = 6;

function xmaxValue() {
    document.getElementById("xmax_h2").innerHTML = x10.Max_value;
}

// MIN_SAFE_INTEGER Property

let x11 = Number.MIN_SAFE_INTEGER;

function minSafe() {
    document.getElementById("min_h2").innerHTML = x11;
}


// POSITIVE_INFINITY

let x12 = Number.POSITIVE_INFINITY;

function posInfinity() {
    document.getElementById("pos_h2").innerHTML = x12;
}

// For Each Method
const numbers = [45, 4, 9, 16, 25];

let txt1 = "";
numbers.forEach(eachMethod);
document.getElementById("each_h2").innerHTML = txt1;

function eachMethod(value, index, array) {
    txt1 += value + "<br>";
}

// New Date
const d = new Date(1998, 5, 10, 10, 33, 30);

function newDate() {
    document.getElementById("date_h2").innerHTML = d;
}

// Math Ceil

function mathCeil() {
    document.getElementById("ceil_h2").innerHTML = Math.ceil(1.8);
}

// Math Trunc

function mathTrunc() {
    document.getElementById("trunc_h2").innerHTML = Math.trunc(-2.2);
}

// Math Sign

function mathsign() {
    document.getElementById("sign_h2").innerHTML = Math.sign(10);
}

// Math Pow

function mathPow() {
    document.getElementById("pow_h2").innerHTML = Math.pow(4, 3);
}

// Math sqrt

function mathSqrt() {
    document.getElementById("sqrt_h2").innerHTML = Math.sqrt(64);
}

// Math sqrt

function mathRandom() {
    document.getElementById("ran_h2").innerHTML = Math.random();
}

// Booleans
function booleans() {
    document.getElementById("bool_h2").innerHTML = 10 < 9;
}

// Ternary Operator

function terOp() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("ter_h2").innerHTML = voteable + " to vote.";
}