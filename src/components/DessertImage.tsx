import React from 'react';
import type { Dessert } from '../types/Dessert';

interface DessertImageProps {
  dessert: Dessert;
  isSelected: boolean;
}

const DessertImage: React.FC<DessertImageProps> = ({ dessert, isSelected }) => {
  return (
    <img 
      src={dessert.image.desktop} 
      alt={dessert.name}
      className={`dessert-image ${isSelected ? 'selected' : ''}`}
    />
  );
};

export default DessertImage;