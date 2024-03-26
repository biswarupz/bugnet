const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Sayu1fyqWVxa8iMz@test-cluster-1.qiqhvln.mongodb.net/buggy404"
);
const VictimsSchema = new mongoose.Schema({
  picture: String,
});

const Victims = mongoose.model("User", VictimsSchema);
module.exports = {
  Victims,
};
