"use client";
import React, { useEffect, useState, useCallback } from "react";

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(1);
  const [msgError, setMsgError] = useState(null);

  const productsUrl = `https://dummyjson.com/products?limit=${clickCount * 20}&skip=0`;

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(productsUrl);
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      setMsgError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [productsUrl]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const loadMoreProducts = useCallback((e) => {
    e.preventDefault();
    setClickCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
    <div className="relative max-w-7xl mx-auto pt-24">
      <div className="flex flex-wrap justify-around ">
        {products.map((product, index) => (
          <div key={index} className=" max-w-52 flex items-center flex-col bg-white text-black mx-2 my-2 rounded-xl">
            <img
              src={product.thumbnail}
              alt=""
              loading="lazy"
              height={200}
              width={200}
              className="py-2 object-cover aspect-square px-6 rounded-xl"
            />
            <div className="text-center p-1">{product.title}</div>
            <div className="p-1">MPR:{product.price}/- </div>
            <div className=" text-red-600"> ({product.discountPercentage}% Off)</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
      <button className="px-3 py-4 font-bold rounded-lg bg-slate-950 hover:bg-white hover:text-black" onClick={loadMoreProducts}>
        Load More
      </button>
      </div>
      {loading && <div>Loading Data...</div>}
      {msgError && <div>Error fetching products: {msgError}</div>}
      </div>
    </>
  );
};

export default LoadMore;
