// fs = filesystem module
const fs = require("fs");
const fileName = "target.txt";

// syncronous function example, doesnt have callback function
// const data = fs.readFileSync(fileName);
// console.log(data.toString());


const errorHandler = error => console.log(error);

const dataHandler = data => console.log(data.toString());

//assyncronous has callback function
fs.readFile(fileName, (error, data) => {
    if(error){
        errorHandler(error);
    }
    dataHandler(data);
});

console.log("nodejs assync programming");