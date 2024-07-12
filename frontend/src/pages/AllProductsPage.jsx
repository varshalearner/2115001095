import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../pages/ProductCard';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: '',
    sortBy: '',
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [filters, page]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('', {
        params: {
          ...filters,
          page,
          n: 10,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
  
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {products.map((product) => (
          <ProductCard key={product.custom_id} product={product} />
        ))} */}
      </div>

    </div>
  );
};

export default AllProductsPage;