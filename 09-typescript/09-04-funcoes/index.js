"use strict";
function greet(name, age) {
    console.log("Hello " + name.toUpperCase() + "!");
    if (age) {
        console.log("Eu tenho " + age + " anos.");
    }
    console.log('-------------------------------');
}
greet('Daniel');
greet('Roberto', 21);
