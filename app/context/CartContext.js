"use client";

import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const router = useRouter;

  useEffect(() => {
    setCartToState()
  }, [])

  const setCartToState = () => {
    setCart(
      localStorage.getItem('cart') 
      ? JSON.parse(localStorage.getItem('cart'))
      : []
    )
  }

  const addItemToCart = async ({
    product,
    name,
    category,
    price,
    image,
    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      category,
      price,
      image,
      quantity,
    };
    const isItemExist = cart?.cartItems?.find((i) => i.product === item.product);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product === isItemExist.product ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }))
    setCartToState();

  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
      }}
    ></CartContext.Provider>
  );
};

export default CartContext
