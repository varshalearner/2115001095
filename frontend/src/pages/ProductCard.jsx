import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-1">{product.company}</p>
      <p className="text-lg font-semibold mb-1">Price: ${product.price.toFixed(2)}</p>
      <p className="text-yellow-500 mb-1">Rating: {product.rating} ★</p>
      <p className="text-green-500 mb-1">Discount: {product.discount}%</p>
      <p className={`mb-4 ${product.availability === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
        Availability: {product.availability}
      </p>
      <Link to={`/product/${product.custom_id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
