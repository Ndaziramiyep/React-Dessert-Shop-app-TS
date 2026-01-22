import React from 'react';
import type { Dessert } from '../types/Dessert';
import DessertImage from './DessertImage';
import AddToCartButton from './AddToCartButton';
import QuantityControls from './QuantityControls';
import DessertInfo from './DessertInfo';

interface DessertCardProps {
  dessert: Dessert;
  quantity: number;
  onAddToCart: (dessert: Dessert) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

const DessertCard: React.FC<DessertCardProps> = ({
  dessert,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement
}) => {
  return (
    <div className="dessert-card">
      <div className="dessert-image-container">
        <DessertImage dessert={dessert} isSelected={quantity > 0} />
        {quantity === 0 ? (
          <AddToCartButton dessert={dessert} onAddToCart={onAddToCart} />
        ) : (
          <QuantityControls 
            quantity={quantity}
            dessertId={dessert.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        )}
      </div>
      <DessertInfo dessert={dessert} />
    </div>
  );
};

export default DessertCard;