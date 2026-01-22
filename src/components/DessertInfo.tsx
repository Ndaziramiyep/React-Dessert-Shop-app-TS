import React from 'react';
import type { Dessert } from '../types/Dessert';

interface DessertInfoProps {
  dessert: Dessert;
}

const DessertInfo: React.FC<DessertInfoProps> = ({ dessert }) => {
  return (
    <div className="dessert-info">
      <p className="dessert-category">{dessert.category}</p>
      <h3 className="dessert-name">{dessert.name}</h3>
      <p className="dessert-price">${dessert.price.toFixed(2)}</p>
    </div>
  );
};

export default DessertInfo;