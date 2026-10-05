// // Bitwise
console.log(10&2);
console.log(10|2);
console.log(10^2);
console.log(~5);
console.log("5" & 1);
console.log("5" | "1");
console.log(5&"1");

// // Logical

console.log(10 && 2 );
console.log(10 || 2);
console.log(10>2 && 897<2 );
console.log(10<2 || 897>2);
console.log(10>2 && 897>2 || 5>2 && 5<2 && 87<9);
console.log(10>2 && 897>2 || 5>2);
console.log(10>2 && 897>2 || 5>2 && 5<2 );
console.log(true && false);
console.log(true || true && false); 
console.log(false && false);
console.log(true && true || false && true || false && true);
let a=true && true || false && true || false && true;
console.log(!a);
console.log(a);
console.log(null && undefined);
console.log(null || undefined);
console.log(!null);
console.log(!undefined);
console.log(null && true || false && true || false && true);
console.log(undefined && true || false && true || false && true);
console.log(null || true || false && true || false && true);
console.log(undefined || true || false && true || false && true);

// // Ternary

let age=18;
let result=(age>=18)?"Eligible to vote":"Not Eligible to vote";
console.log(result);
let result2=age>=21?"Eligible for Group1 exam":"Not Eligible for Group1 exam";
console.log(result2);

// // Statements

// //if
let num=87594;
if(num>754587){
    console.log("Greater than 754587");
}
let num1=86435982398;
if(num1>754587){
    console.log("Greater than 754587");
}

// //if-else
let num2=10;
if(num2>0){
    console.log("Positive");
}else{
    console.log("Not Positive");
}

// //if-else-if
let num3=-36286;
if(num3>0){
    console.log("Positive");
}else if(num3<0){
    console.log("Negative");
}else{
    console.log("Zero");
}

// // nested if-else
let num4=0;
if(num4>0){
    console.log(num4 + " Positive");
}else{
    if(num4<0){
        console.log(num4 + " Negative");
    }else{
        console.log(num4 + " Zero");
    }
}

// //for loop
for(let i=19;i<=50;i=i+5){
    console.log(i+" Js");
}
for(let i=19;i<=50;i=i+5){
    console.log(" Js");
}
for(let i=19;i<=50;i=i+5)
    console.log(i+" Js");

// infinite loop pogum i++ will not work
let i=0;
while(i<5){
    console.log("hello",i)
    i++;
}

// do while
do{
    console.log("do while")
}while(10<2);

// for of
let arr=[6,2,3,4,6,8,9,12];
for(let k of arr){
    console.log(k);
}

// for in only for objects
let r={name: "Nilla", age: "16", gender: "Female"};
for(let key in r){
    console.log(key);
    console.log(r[key]);
}

