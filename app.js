'use strict';
//exercises

function yearOfBirth(age) {
  try {
    if(age < 0) {
      throw new Error("Age cannot be negative");
    } return 2018 - age;
  } 
  catch(e) {
    console.log(e);
  }
}

/*function isNegative(yearOfBirth(age)) {
  throw {
    message: "Age can not be negative",
    name: "FatalException",
    toString: function() {
      return `${this.name}: ${this.message}`;
    }
  }
}
*/



function whoAmI(name, age) {
  try {
    if(typeof age === 1 || typeof name === 'string') {
      throw new Error('Arguments not valid');
    }
  }
  catch(e) {
    console.log(e);
  }
  let yob = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yob}`);
 
}

whoAmI('Sarah');
//yearOfBirth(24);


