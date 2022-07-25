const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const router = require("./UserRoutes");





const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/register.html"))
});

// app.get("/api/v1/userdata", (req,res)=>{
//     res.json({
//         name:"faraz",
//         email:"sample@gmail.com",
//         password: "hexed",
//     });
  

// });


// app.post("/api/v1/login", (req,res)=>{
    
//     const userName = req.body.name;
//     const Email = req.body.email;
//     const Pass = req.body.password;
//     // console.log(req.body.name)
//     res.send(`<h1>Welcome Mr. ${userName}</h1> <h1>Your Email is  ${Email}</h1> <h1>Your Pass is ${Pass}</h1>`)
//     // res.send(console.log("My Name is Faraz And i am Working On Express JS This my multiple attempt to learn express js ")); 
// });


app.listen(port,()=>{
    console.log(`server is runing on port: ${port}`);
});
