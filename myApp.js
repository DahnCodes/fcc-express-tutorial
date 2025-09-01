let express = require('express');
let app = express();
// app.get("/", function(req, res){
// res.send('Hello Express');
// })

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.use("/public/style.css", express.static(__dirname + "/public/style.css"));
console.log("Hello World");



































 module.exports = app;
