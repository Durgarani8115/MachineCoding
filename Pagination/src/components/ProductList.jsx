// components/ProductList.jsx

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import Pagination from "./Pagination";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const loadData = async () => {
    try {
      const res = await fetchProducts(currentPage, ITEMS_PER_PAGE);
      setProducts(res.products);
      setTotal(res.total);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, [currentPage]);

  return (
    <div>
      <h2>Products</h2>

      {/* Product Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductList;