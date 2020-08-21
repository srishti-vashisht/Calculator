const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))          /* URL-encoded parser, which will parse the bodies or content of all incoming requests. */


app.get("/",function(req , res){ 
  /*  console.log(__dirname);                         /*res.sendFile as sending the html file as response*/
    res.sendfile(__dirname +"/index.html");        /*Giving the entire path for index.html, 
                                                    as server can be hosted anywhere,using  this will get current fle location*/
})

app.get("/bmicalculator",function(req,res){
    res.sendfile(__dirname +"/bmiCalculator.html");
})

app.post("/",function(req,res){                      /*posting this back to req on home route*/
   
    var num1=Number(req.body.num1);                   /*By default num1 will be parsed as text and result will be string , therefore explicitly convert to Number*/
    var num2=Number(req.body.num2);

    var result = num1 + num2;

    res.send("Calculated Result is "+ result);

})

app.post("/bmicalculator",function(req,res){

    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var BMI = weight /(height * height);

    res.send("Your BMI is " + BMI);
})

app.listen("2000",function(){
    console.log("server started on port 2000");
})