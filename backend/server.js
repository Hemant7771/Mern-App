const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection (PRODUCT DB)
mongoose
  .connect("mongodb://127.0.0.1:27017/mernProducts")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model("Product", ProductSchema);

// GET products (READ)
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// POST product (CREATE)
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: "Error adding product" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
