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
  
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
    }
        res.json({"message": message});
})
app.use((req, res, next) =>{
console.log(`${req.method} ${req.path} ${req.ip}`);
next();
})
app.use("/public/style.css", express.static(__dirname + "/public/style.css"));
console.log("Hello World");

// let method = "GET"
// let path = "/json"
// let ip = "::ffff:127.0.0.1"


 module.exports = app;
