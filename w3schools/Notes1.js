var x = 10;

{
    let x = 2;

}

console.log('x is ' + x);
    // It will print x is 10,
    // because let cannot accessible outside the block




//Declaring object 1st way
const car = {type:"Honda", year:"2007", color:"red"};

// Create an Object 2nd way
const person = {};

// Add Properties
person.firstName = "Emin";
person.age = 31;



//Accessing object properties
console.log(person.age)
console.log(person["age"])

delete person.firstName;
console.log(person.firstName) //undefined




const customer = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName; //this refers to the belonging object
    }
};

//Accessing object methods
console.log(customer.fullName()); //John Doe


//Adding a new method to an object partially
customer.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(customer.name()); // JOHN DOE
