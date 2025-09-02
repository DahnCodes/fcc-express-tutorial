let express = require('express');
let app = express();
require('dotenv').config();
// app.get("/", function(req, res){
// res.send('Hello Express');
// })

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})
app.get("/json", (req, res) => {
    let response = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase"){
        response = response.toUpperCase();
    }
        res.json({"message": response});
})
app.use("/public/style.css", express.static(__dirname + "/public/style.css"));
console.log("Hello World");



































 module.exports = app;
