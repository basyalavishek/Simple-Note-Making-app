const express = require("express");

const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello");
});

// Create
app.get("/create", async (req, res) => {
  // In usermodel.js, we have defined these things so passing these to usermodel
  let createdUser = await userModel.create({
    name: "Avishek",
    username: "basyalavishek",
    email: "avishekbasyal@gmail.com",
  });
  res.send(createdUser);
});

// Read
app.get("/read", async (req, res) => {
  //   let users = await userModel.find({ name: "Avishek" }); // to read the user with username "basyalavishek"
  let users = await userModel.find(); // to read all the users
  res.send(users);
});

//Update
app.get("/update", async (req, res) => {
    // searching by username and updating the name of that username , new:true means we will get updated user
    let updatedUser = await userModel.findOneAndUpdate(
      { username: "basyalavishek" },
      { name: "AvishekDai" },
      { new: true }
    );
    res.send(updatedUser);
  });
  

// Delete
app.get("/delete", async (req, res) => {
  // delete the user with name "Avishek"
  let deletedUser = await userModel.findOneAndDelete({ name: "Avishek" });
  res.send(deletedUser);
});

app.listen(3000);
