import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../pages/ProductCard';

const AllProductsPage = () => {
//   const [products, setProducts] = useState([]);
const products = [
    {
      custom_id: '1',
      name: 'Product 1',
      company: 'Company A',
      price: 29.99,
      rating: 4.5,
      discount: 10,
      availability: 'In Stock',
    },
    {
      custom_id: '2',
      name: 'Product 2',
      company: 'Company B',
      price: 49.99,
      rating: 4.0,
      discount: 15,
      availability: 'In Stock',
    },
    {
      custom_id: '3',
      name: 'Product 3',
      company: 'Company C',
      price: 19.99,
      rating: 3.5,
      discount: 5,
      availability: 'Out of Stock',
    },
    {
      custom_id: '4',
      name: 'Product 4',
      company: 'Company D',
      price: 99.99,
      rating: 5.0,
      discount: 20,
      availability: 'In Stock',
    },
    {
      custom_id: '5',
      name: 'Product 5',
      company: 'Company E',
      price: 39.99,
      rating: 4.2,
      discount: 8,
      availability: 'In Stock',
    },
  ];
  
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
        {products.map((product) => (
          <ProductCard key={product.custom_id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default AllProductsPage;