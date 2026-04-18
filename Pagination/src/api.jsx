// api.js

export const fetchProducts = async (page, limit) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
  );
  const data = await res.json();

  return {
    products: data.products,
    total: data.total,
  };
};