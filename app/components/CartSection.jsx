import React from "react";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";

const CartSection = () => {
  return (
    <main>
      <h1 className="text-reed font-bold text-cart">Your Cart (0)</h1>

      <div className="hidden">
        <FullCart />
      </div>

      <div className="block">
        <EmptyCart />
      </div>
    </main>
  );
};

export default CartSection;
