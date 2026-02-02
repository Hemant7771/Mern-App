import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((p, i) => (
        <ProductCard key={i} name={p.name} price={p.price} />
      ))}
    </div>
  );
}

export default ProductList;
