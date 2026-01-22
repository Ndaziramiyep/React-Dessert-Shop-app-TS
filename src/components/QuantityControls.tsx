import React from 'react';

interface QuantityControlsProps {
  quantity: number;
  dessertId: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

const QuantityControls: React.FC<QuantityControlsProps> = ({
  quantity,
  dessertId,
  onIncrement,
  onDecrement
}) => {
  return (
    <div className="quantity-controls">
      <button 
        className="quantity-btn"
        onClick={() => onDecrement(dessertId)}
      >
        <img src="./assets/images/icon-decrement-quantity.svg" alt="Decrease" />
      </button>
      <span className="quantity">{quantity}</span>
      <button 
        className="quantity-btn"
        onClick={() => onIncrement(dessertId)}
      >
        <img src="./assets/images/icon-increment-quantity.svg" alt="Increase" />
      </button>
    </div>
  );
};

export default QuantityControls;