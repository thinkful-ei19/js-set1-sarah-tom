'use strict';
//exercises

function yearOfBirth(age) {
  try {
    age < 0;
  }
  catch(e) {
    console.log("Age can not be negative");
    }
  return 2018 - age;
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yob}`)
}

whoAmI('Sarah', -33);



