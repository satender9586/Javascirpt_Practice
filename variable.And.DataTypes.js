/* 
    This file is responsible for variable and data types in js.
    This file contains the following topics:
    1. Variable
    4. declaration and initialization and reassigned
    5. var, let, const
    6. Primitive and Non-Primitive Data Types
    7. typeof operator
    8. NaN and Infinity
    9. null and undefined
    10. BigInt and Symbol
    11. Object and Array
    12. String, Number, Boolean, Object, Array, Function, Date, RegExp, Error,
*/

// *********************Variable*********************************

/*
    Variable is a container that holds a value. It is used to store data in memory.
    In js, we can declare a variable using var, let and const keywords.
    var : is used to declare a variable that can be re-declared and updated.
    let : is used to declare a variable that can be updated but not re-declared.
    const : is used to declare a variable that cannot be updated or re-declared.
*/

var name = "John"; // var variable
var name = "Doe"; // re-declared and updated
name = "Smith"; // updated

let letName = "Sanjay" // let variable
letName = "Amit Kumar" // update
//let letName = "Tarun"  // not re-declare


const constName = "jone" // const vaiable
// const constName = "jone smith" // can not re-declared    
// constName = "jone smith" // can not update


// ************************Declaration and Initialization and reassignment*********************************

/* 
    let age // declaration : is the process of creating a variable and allocating memory for it.
    age = 20 // initialization : is the process of assigning a value to a variable. 
    age = 25 // reassignment : is the process of changing the value of a variable.
*/


