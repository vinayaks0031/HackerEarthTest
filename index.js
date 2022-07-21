const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: path.resolve(__dirname, "./config.env") });

require("./db/connection");
const Image = require("./model/model");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/getData", async (req, res) => {
  try {
    const result = await Image.find({});
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.post("/", (req, res) => {
  try {
    const entry = new Image({
      ImgName: req.body.ImgName,
      ImgUrl: req.body.ImgUrl,
      ImgDetails: req.body.ImgDetails,
    });
    entry.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.get("/getImageData/:id", async (req, res) => {
  try {
    const id = req.params["id"];
    const result = await Image.findOne({ _id: mongoose.Types.ObjectId(id) });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.put("/:id/edit", async (req, res) => {
  try {
    const id = req.params["id"];
    const result = await Image.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      req.body
    );
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteData/:id", async (req, res) => {
  const id = req.params["id"];
  const result = await Image.deleteOne({ _id: mongoose.Types.ObjectId(id) });
  res.json(result);
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
