const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mernDemo")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Schema & Model
const StudentSchema = new mongoose.Schema({
  name: String,
  course: String,
});

const Student = mongoose.model("Student", StudentSchema);

// ================= ROUTES =================

// GET – Read all students (READ)
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
});

// POST – Add new student (CREATE)
app.post("/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: "Error adding student" });
  }
});

// ===========================================

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
