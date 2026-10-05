let wrd=" Hello World"
console.log(wrd.replace("World", "Everyone"));
console.log(wrd);

let s="Hello JavaScript";
console.log(s.split(" "));
console.log(s.length);
console.log(s.charAt(2));
console.log(s.indexOf("l", 3));
console.log(s.search("J/i"));
console.log(s.match(/l/gi));// globalsearch and case insensitive
console.log(Array.from(s.matchAll(/l/gi)));

console.log(s.includes("LJ"));
console.log(s.startsWith("H"));
console.log(s.endsWith("pt"));

// pad slice trim
let u="hi"
console.log(u.padStart(5, "hbef"));

//slice
let v="Hello JavaScript";
console.log(v.slice(2, 5));
console.log(v.slice(-5, -2));// will accept negative indices
console.log(v.substring(2, 5));//will not accept negative indices
console.log(v.trim().length);// will remove white spaces from both ends
console.log(v.toUpperCase());
console.log(v.split(" ")[0].toLowerCase());// to caps the fst hello word

//array inbuilt methods
// push- add at last, unshift- add at first,
// pop- remove from last, shift- remove from first
// splice- add and remove from anywhere

// console.log(v.splice(2, 1, "new value"));// 2 is index, 1 is how many to remove, new value is what to add

// indexof, join, slice
// flat -is used to reduce the nested array to a single array
let l=[91,29,3,[94,455,6,[7,8]]];
console.log(l.flat(2));// 2 is the depth of the array to be flattened
l.sort((a,b)=>a-b);// ascending order
l.sort((a,b)=>b-a);// descending order
//copywithin- copies the array elements within the same array
//fill- fills the array with a static value



// Test questions
let a=10;
let b="30";
console.log(a-b);

var x=5;
x+=3;
console.log(x);

let c=11;
console.log(c++ + c);

d=10;
var d;
console.log(d);

let e="";
if(e){
    console.log("Happy");
}

let f="21" > [3] ? 12: 36;
console.log(f);

for(let i=0;i<5;i++){
    console.log(i);
}

let m= "" && null && 0 && 1;
console.log(m);
// empty null undiend 0 all are falsy values
// mutable can change a variable value but immutable cannot change a variable value