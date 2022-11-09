
// bring in the express framework as a module
let express = require("express");

// initiate the application
let app = express();

let PORT = 8000;


app.get("/hello", function (req, res) {
    let time = new Date();
    res.send("TEACH ME TO GET BETTTTEEERRRRR!!!");
});




app.listen(PORT, function () {
    console.log("Application started on port ", PORT);
})



// variables
// if/else statements
// loops
// functions
// arrays
// callbacks
// object literals