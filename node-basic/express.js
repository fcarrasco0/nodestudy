//example code of how to use express module

// calling express module
const express = require("express");
const app = express();

//route get home
app.get('/', (req, res) => {
    res.send("Hello Expresso!");
});

app.listen(3000);