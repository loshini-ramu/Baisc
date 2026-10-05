"use strict";
/**
 * Module 06: TypeScript Core Syntax Sample
 * To compile this file:
 * 1. Install TS compiler: `npm.cmd install -g typescript`
 * 2. Run: `tsc basics.ts`
 * if we made any changes again we should give tsc basics.ts
 * 3. Run the output JS file: `node basics.js`
 */
// 1. Basic Type Annotations
const programname = "FITA Master program";
let Duration = 6;
let isFullStack = true;
let wildcard = "Can hold strings, numbers, objects etc.";
// 2. Tuples & Enums
// Tuple: Fixed length and ordered types
let geolocation = [9890, 82374];
// 3. Enum- user must enter the value complusory choice
var Candidate;
(function (Candidate) {
    Candidate[Candidate["Fresher"] = 1] = "Fresher";
    Candidate[Candidate["Intermediate"] = 2] = "Intermediate";
    Candidate[Candidate["Experience"] = 3] = "Experience";
})(Candidate || (Candidate = {}));
let candidatelevel;
let uservalues = {
    name: "Loshini",
    age: 20,
    email: "loshinir2006@gmail.com",
    rating: 9
};
console.log(uservalues);
// 5.OOPS(Classes)
// Public, Protected , Private only accessed in class
class classuser {
    name;
    age;
    email;
    rating; //Private only accessed in class
    //  constructor assign a value in oject to class
    constructor(name, age, email, rating) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.rating = rating;
    }
    getuserdetail() {
        return 'Name: ${this.name}, Age: ${this.age}, Email: ${this.email}';
    }
    //  Private member accessor
    getratings() {
        return 'Internal Ratings: ${this.rating}/10';
    }
}
// inheritance
class Animal {
    soundOfAnimal() {
        return "cow";
    }
}
class cow extends Animal {
    ageOfAnimal() {
        return 5;
    }
}
let c = new cow();
console.log(c.soundOfAnimal());
