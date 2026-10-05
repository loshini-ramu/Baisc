/**
 * Module 06: TypeScript Core Syntax Sample
 * To compile this file:
 * 1. Install TS compiler: `npm.cmd install -g typescript`
 * 2. Run: `tsc basics.ts`
 * if we made any changes again we should give tsc basics.ts 
 * 3. Run the output JS file: `node basics.js`
 */

// 1. Basic Type Annotations
const programname:string="FITA Master program";
let Duration:number=6;
let isFullStack:boolean=true;
let wildcard:any="Can hold strings, numbers, objects etc.";

// 2. Tuples & Enums
// Tuple: Fixed length and ordered types
let geolocation:[number,number]=[9890,82374];

// 3. Enum- user must enter the value complusory choice
enum Candidate{
    Fresher = 1,
    Intermediate = 2,
    Experience = 3
}
let candidatelevel: Candidate.Experience;

// 4.Interface - Define the structure of an object — what properties and methods it should have
interface User{
    name: string;
    age: number;
    email: string;
    rating: number
}

let uservalues: User={
    name: "Loshini",
    age: 20,
    email: "loshinir2006@gmail.com",
    rating: 9
};
console.log(uservalues);

// 5.OOPS(Classes)
// Public, Protected , Private only accessed in class
class classuser{
    public name: string;
    public age: number;
    protected email: string;
    public rating: number; //Private only accessed in class

    //  constructor assign a value in oject to class
    constructor(name:string,age:number,email:string,rating:number){
        this.name=name;
        this.age=age;
        this.email=email;
        this.rating=rating;
    }

    public getuserdetail(): any{
        return 'Name: ${this.name}, Age: ${this.age}, Email: ${this.email}';
    }

    //  Private member accessor
    public getratings(): any{
        return 'Internal Ratings: ${this.rating}/10';
    }

}

// inheritance
class Animal {
    public soundOfAnimal(): string {
        return "cow";
    }
}
class cow extends Animal {

    public ageOfAnimal(): number {
        return 5;
    }
}
let c = new cow();
// cam access parent class using child class obj 
console.log(c.soundOfAnimal());