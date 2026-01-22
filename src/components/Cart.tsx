// import React from 'react';

// interface Dessert {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   image: {
//     thumbnail: string;
//     mobile: string;
//     tablet: string;
//     desktop: string;
//   };
// }

// interface CartItem extends Dessert {
//   quantity: number;
// }

// interface CartProps {
//   cartItems: CartItem[];
//   onRemoveItem: (id: number) => void;
//   onConfirmOrder: () => void;
// }

// const Cart: React.FC<CartProps> = ({ cartItems, onRemoveItem, onConfirmOrder }) => {
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   if (cartItems.length === 0) {
//     return (
//       <div className="cart">
//         <h2>Your Cart (0)</h2>
//         <div className="empty-cart">
//           <img src="./assets/images/illustration-empty-cart.svg" alt="Empty cart" />
//           <p>Your added items will appear here</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <h2>Your Cart ({totalItems})</h2>
//       <div className="cart-items">
//         {cartItems.map(item => (
//           <div key={item.id} className="cart-item">
//             <div className="cart-item-info">
//               <h4>{item.name}</h4>
//               <div className="cart-item-details">
//                 <span className="quantity">{item.quantity}x</span>
//                 <span className="unit-price">@ ${item.price.toFixed(2)}</span>
//                 <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
//               </div>
//             </div>
//             <button 
//               className="remove-item-btn"
//               onClick={() => onRemoveItem(item.id)}
//             >
//               <img src="./assets/images/icon-remove-item.svg" alt="Remove item" />
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="order-total">
//         <span>Order Total</span>
//         <span className="total-amount">${totalPrice.toFixed(2)}</span>
//       </div>
//       <div className="carbon-neutral">
//         <img src="./assets/images/icon-carbon-neutral.svg" alt="Carbon neutral" />
//         <span>This is a <strong>carbon-neutral</strong> delivery</span>
//       </div>
//       <button className="confirm-order-btn" onClick={onConfirmOrder}>
//         Confirm Order
//       </button>
//     </div>
//   );
// };

// export default Cart;