/** DataType : Data type is responsible to tell that what type of value
    is containe by perticual variable 
    ex : let name = "satender" // this name variable has been contain string type value

    types : In js type is categories into two part first one is premitive and non-premitive

    premitive : string , boolean , number , symbel , null , undefined , bigInt, (single vlaue strore, immutable, share copy) 
    non-premitive (reference) : function, object, array , (mutalbe, can be multitle value strore, share reference)
    */

// premitive
const name = "raju kumar"; // string
let age = 40; // number
var ismail = true; // boolean

// non premitive
const myInfo = {
  name: "raju",
  gender: "mail",
  about: function () {
    console.log(this.name);
  },
};

// string -> is a premitive data type , represt text

let myName = "Raju Thakur";

//string methods -> length, toUpperCase, toLowerCase, charAt(), includes(), startwith
//endwith, indexof, lastindexof, slice, substring, substr, replace, replaceAll,
//trim(), stimStart(), trimEnd(), split, concat, padstart, join,padend, match, search

console.log(myName.length); // for check length of string
console.log(myName[0]); // indexing
console.log(myName.charAt(5)); // check charter on the index
