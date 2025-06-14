// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
    text += person[x] + " ";
};

// Display the Text
document.getElementById("demo").innerHTML = text;


JSON.stringify(person)



// Constructor function for Macarena Objects
function Macarena(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Macarena Objects
const myFather = new Macarena("John", "Doe", 50, "blue");
const myMother = new Macarena("Sally", "Rally", 48, "green");

//Adding new property on object constructor, you need prototype keyword
Macarena.prototype.nationality = "English";

//<button onclick="displayDate()">The time is?</button>

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}


let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

/* output:
It's alright
He is called 'Johnny'
He is called "Johnny"
 */


let text1 = "We are the so-called \"Vikings\" from the north.";
let text2= 'It\'s alright.';
let text3 = "The character \\ is called backslash.";

/* output:
We are the so-called "Vikings" from the north.
It's alright.
The character \ is called backslash.
 */



//Arrow function
let hello = () => {
    return "Hello World!";
}

"use strict";
//m =3.14; It was allowed without "use strict";