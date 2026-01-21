import React from 'react';

interface Dessert {
  id: number;
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

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
        <img 
          src={dessert.image.desktop} 
          alt={dessert.name}
          className={`dessert-image ${quantity > 0 ? 'selected' : ''}`}
        />
        {quantity === 0 ? (
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(dessert)}
          >
            <img src="./assets/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button 
              className="quantity-btn"
              onClick={() => onDecrement(dessert.id)}
            >
              <img src="./assets/images/icon-decrement-quantity.svg" alt="Decrease" />
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="quantity-btn"
              onClick={() => onIncrement(dessert.id)}
            >
              <img src="./assets/images/icon-increment-quantity.svg" alt="Increase" />
            </button>
          </div>
        )}
      </div>
      <div className="dessert-info">
        <p className="dessert-category">{dessert.category}</p>
        <h3 className="dessert-name">{dessert.name}</h3>
        <p className="dessert-price">${dessert.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DessertCard;