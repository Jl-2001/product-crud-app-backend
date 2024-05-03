const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node friend");
});

mongoose
  .connect(
    "mongodb+srv://jlazaro0101:Xvkwjw3hJAt1EX6g@backenddb.3p5pvvo.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to the database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
