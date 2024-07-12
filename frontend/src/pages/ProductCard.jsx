import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src="https://via.placeholder.com/150" alt={product.name} className="mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.company}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
      <Link to={`/product/${product.custom_id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;