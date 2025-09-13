let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
// app.get("/", function(req, res){
    // res.send('Hello Express');
    // })
    
    app.use((req, res, next) =>{
        console.log(`${req.method} ${req.path} - ${req.ip}`);
        next();
    })
    
    app.use("/public/style.css", express.static(__dirname + "/public/style.css"));
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/json", (req, res) => {
  
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
    }
        res.json({"message": message});
});

function addTimeMiddleWare(req, res, next){
req.time = new Date().toString();
next();
}

function timeHandler(req, res) {
    res.json({time : req.time})
}
app.get("/now", addTimeMiddleWare, timeHandler);

app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time : req.time})
})

app.get("/:word/echo", (req, res) =>{
    const word = req.params.word;
    res.json({echo: word})
})

// app.get("/name", (req, res)=>{
//     const first = req.query.first;
//     const last = req.query.last;
//     res.json({name: `${first} ${last}`});
// })

app.route("/name")
 .get((req, res)=>{
    const first = req.query.first;
    const last = req.query.last;
    res.json({name: `${first} ${last}`})
})
.post((req, res)=>{
    const first = req.body.first;
    const last = req.body.last;
    res.json({name: `${first} ${last}`})
});


console.log("Hello World");

// let method = "GET"
// let path = "/json"
// let ip = "::ffff:127.0.0.1"


 module.exports = app;
