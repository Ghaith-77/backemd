let express = require("express");
let mongoose = require("mongoose");
let app = express();
let Article = require("./models/article")
mongoose
  .connect(
    "mongodb+srv://gaesx1x2:gaesx1x2@cluster0.t9sqeyn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("yazan horema");
  })
  .catch((e) => {
    console.log(e);
  });
// #mongodb+srv://gaes:<password>@firstproject.nlwlbqs.mongodb.net/?retryWrites=true&w=majority
app.use(express.json());

app.get("/getnum", (req, res) => {
  let num = 0;
  for (let i = 1; i < 100; i++) {
    num += i + "+";
  }
  // res.send(`the num id ${num} _`);
  // res.send(__dirname + "/views/index.html")

  // res.sendFile(__dirname + "/views/index.html")
  res.render("index.ejs", {
    name: "ghaith",
    num,
  });
});

app.get("/Article",(req,res)=>{
  let newarticle = new Article()
  newarticle.title = "ghaith"
  newarticle.body = "body"
  res.json(newarticle)
})
app.get("/saymyname", (req, res) => {
  let age = req.query.age;
  let name = req.body.name;
  console.log(name, age);
  res.json({
    name,
    age,
  });
});
app.get("/sum/:num1/:num2", (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let result = Number(num1) + Number(num2);
  res.send(`${result}`);
});
app.post("/post", (req, res) => {
  res.send("post");
});
app.listen(3000, () => {
  console.log("server is ranning");
});
