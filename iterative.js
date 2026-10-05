let t=[34,438,90,4230,938];
let m=t.map((e,i)=> {
    return e+5;// it can also give false // also callback func
})
console.log(m);
//filter-
let f=t.filter((e,i)=> {
    return e>10;// it can also give false
})
console.log(f);
// find- will display fst match value 3 para
let r=t.reduce((pre,e,)=> {
    return e>pre// it can also give false
})
console.log(r);
//findindex 3 para
//reduce- will add all numbers// will have 4 parameters


//Functions
//types of func 1.pure 2.impure 3. arrow 4. IIFE 5.higher order 6.callback

 // pure func
function hello2(){
    console.log("Hello World");
}
hello2();

// impure
let k=10;
function hello(){
    k=24;
    console.log("Hello World");
}
hello();
console.log(k);


//arrow
let hello1=()=>{
    console.log("Javascript");
}
hello1();

//IIFE- also known as annoynamous fuc
(()=>{
    console.log("IIFE");
})()

