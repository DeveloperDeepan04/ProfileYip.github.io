const express = require('express');
const app = express();
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const pass = req.body.pass;
  const date = req.body.date;
  const pimage = req.body.pimage;
  const color = req.body.color;
  const agree = req.body.agree;
  console.log("First Name: " + fname);
  console.log("Last Name: " + lname);
  console.log("Email: " + email);
  console.log("Password: " + pass);
  console.log("Date: " + date);
  console.log("Profile Image: " + pimage);
  console.log("Gender: " + gender);
  console.log("Agree: " + agree);
  res.send("Your Data has been Received");
});
 
app.listen(3000);