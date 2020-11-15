var express = require("express");
var bodyParser = require("body-parser");
var btoa = require("btoa");
var atob = require("atob");
var jd = require("./judge");
var jd_gcc = require("./judge_gcc");
var jd_gpp = require("./judge_gpp");
var jd_python = require("./judge_python");


var app = express();
//app.set('port',process.env.PORT || 5050);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.post("/run", function (req, res) {
    //console.log(req.body.code);
    var code = req.body.code;//atob(req.body.code);
    var stdin = req.body.stdin;//atob(req.body.stdin);
    var language = req.body.language;
    
    // res.send(JSON.stringify({
    //     "code" : req.query.code, "stdout" : req.query.stdin
    // }));
    if(language == "C"){
        console.log("C");
        jd_gcc.judge(code, stdin).then(function (data) {
            var payload = JSON.stringify({
                "stdout": data[0],
                "stderr": data[1]
            });
            console.log(payload);
            console.log("\n\n");
            //console.log(btoa(payload));
            console.log("\n\n");
            res.json(payload)
        }).catch(function (data) {
            res.json("something went horribly wrong!");
        })
    }else if(language == "C++"){
        console.log("C++");
        jd_gpp.judge(code, stdin).then(function (data) {
            var payload = JSON.stringify({
                "stdout": data[0],
                "stderr": data[1]
            });
            console.log(payload);
            console.log("\n\n");
            //console.log(btoa(payload));
            console.log("\n\n");
            res.json(payload)
        }).catch(function (data) {
            res.json("something went horribly wrong!");
        })
    }else if(language == "Python"){
        console.log("Python");
        jd_python.judge(code, stdin).then(function (data) {
            var payload = JSON.stringify({
                "stdout": data[0],
                "stderr": data[1]
            });
            console.log(payload);
            console.log("\n\n");
            //console.log(btoa(payload));
            console.log("\n\n");
            res.json(payload)
        }).catch(function (data) {
            res.json("something went horribly wrong!");
        })
    }
})

app.get('/servertext',(req,res) =>{
    res.send([
        {
            'id':1,
            'name':'sibalu',
            'job':'no jobs'
        }
    ])
})

app.listen(3000, function () {
    console.log("serving at http://localhost:5000");
});
