import React from 'react';
import type { Dessert } from '../types/Dessert';

interface AddToCartButtonProps {
  dessert: Dessert;
  onAddToCart: (dessert: Dessert) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ dessert, onAddToCart }) => {
  return (
    <button 
      className="add-to-cart-btn"
      onClick={() => onAddToCart(dessert)}
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;