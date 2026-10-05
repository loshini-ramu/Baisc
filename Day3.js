//Jumping statements
// break continue

for (let i=0;i<10;i++){
    console.log(i);
    if(i%5==0){
        console.log("i found the num",i);
        continue;
    }
    i++;
}

// Switch Statement
switch ("FS1"){
case "FS":
    console.log("Full Stack");
    break;
case "DS":
    console.log("Data Science");
    break;
case "AI":
    console.log("Artificial Intelligence");
    break;
default:
    console.log("No Match Found");
    break;
}