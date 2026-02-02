const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mernDemo")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const StudentSchema = new mongoose.Schema({
  name: String,
  course: String
});

const Student = mongoose.model("Student", StudentSchema);

app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
