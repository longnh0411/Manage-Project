import React from "react";

export default function Cart({ items, onUpdateItemQuantity }: {
  items: { id: string; name: string; price: number; quantity: number }[];
  onUpdateItemQuantity: (id: string, amount: number) => void;
}) {
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <span>{item.name}</span>
                <span>{` (${item.price.toFixed(2)})`}</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

