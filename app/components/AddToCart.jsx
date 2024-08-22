"use client"

import React, { useState, useEffect} from "react";
import Image from "next/image";
import cart from "../../public/assets/images/icon-add-to-cart.svg";
import add from "../../public/assets/images/icon-increment-quantity.svg";
import minus from "../../public/assets/images/icon-decrement-quantity.svg";


const AddToCart = () => {
return (
    <main className="">
      <div className="">
        <div className="border border-reed bg-rose-50 w-36 lg:w-36 md:w-32 flex items-center justify-center p-2 lg:p-2 md:px-0 rounded-full gap-2 hover:text-reed cursor-grab ">
          <Image src={cart} alt="" />
          <p className="font-semi-bold text-price">Add to Cart</p>
        </div>
      </div>
      <div className="hidden">
        <div className="border border-reed bg-reed w-36 lg:w-36 md:w-32 flex items-center justify-between p-2 lg:p-1.5 md:px-0 rounded-full text-rose-100 text-category">
          <div className="border rounded-full aspect-square flex items-center p-1 hover:bg-rose-100 text-reed border-rose-50 hover:border-reed">
            <Image src={minus} alt="" className="" />
          </div>
          <p className="font-semi-bold text-price">0</p>
          <div className="border rounded-full aspect-square flex items-center p-1 hover:bg-rose-100 text-reed border-rose-50 hover:border-reed">
            <Image src={add} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddToCart;
