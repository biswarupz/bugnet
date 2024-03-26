const express = require("express");
const app = express();
const { Victims } = require("./db/db");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  res.json({ status: 200, message: "sever is live" });
});
app.post("/getpic", async (req, res) => {
  const { img } = req.body;
  const success = await Victims.create({ picture: img });
  if (!success) {
    return res.json({ status: 400 });
  }
  console.log("image stored in db");
  return res.json({ status: 200 });
});

app.post("/image", async (req, res) => {
  const id = req.query.id;

  const images = await Victims.findById(id);
  res.json({ status: 200, data: images.picture });
});
app.listen(5050, () => {
  console.log("http://localhost:5050");
});
