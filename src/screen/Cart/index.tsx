import { useState } from 'react';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './data.js';
import Product from './components/Product.jsx';
import React from 'react';
import './styles.scss'
import { CartContext } from '../../store/store-cart.js';


const CartDemo = () => {
  const [shoppingCart, setShoppingCart] = useState({
    items : []
  });

  const handleAddItemToCart = (id : number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      // const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === id);
      // const existingCartItem : any = updatedItems[existingCartItemIndex];

      // if (existingCartItem) {
      //   const updatedItem = {
      //     ...existingCartItem,
      //     quantity: existingCartItem.quantity + 1,
      //   };
      //   updatedItems[existingCartItemIndex] = updatedItem;
      // } else {
      //   const product = DUMMY_PRODUCTS.find((product : any) => product.id === id);
      //   updatedItems.push({
      //     id: id,
      //     name: product.title,
      //     price: product.price,
      //     quantity: 1,
      //   });
      // }

      return {
        items: updatedItems,
      };
    });
  }

  const handleUpdateCartItemQuantity = (productId : any, amount : number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems : any = [...prevShoppingCart.items];
      const updatedItemIndex : number = updatedItems.findIndex(
        (item : any) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  return (
    <CartContext.Provider value={{ items: shoppingCart.items }}>
      <Header
        cart={shoppingCart.items}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={handleAddItemToCart} />
          </li>
        ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default CartDemo;
