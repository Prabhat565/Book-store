// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// todo: Connecting with Mongodb Server:

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("successfully connected to mongodb..");
} catch (error) {
  console.log("error:", error);
}

//todo :  Defining Routes:
app.use("/book", bookRoute);
app.use("/user", userRoute);

// app.get("/", (req, res) => {
//   res.send(" kya hal h bhai prabhat!");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
