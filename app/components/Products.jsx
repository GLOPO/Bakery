"use client"

import React, { useState, useCallback } from "react";
import Items from "../data.json";
import Image from "next/image";
import AddToCart from "./AddToCart";
import CartContext from '../context/CartContext'
import { useContext } from "react";

const Products = () => {
  // const { addItemToCart } = useContext(CartContext)

  // const addToCartHandler = () => {
  //   addItemToCart({
  //     product: item.id,
  //     name: item.name,
  //     category: item.category,
  //     price: item.price,
  //     image: item.image
  //   })
  // }
  


  return (
    <main className="container grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 ">
      {Items &&
        Items.map((item) => {
          const { id, image, name, category, price } = item;
          return (
            <div key={id}>
              <div className="relative">
                <Image
                  src={image.desktop}
                  alt="product-image"
                  width={"270"}
                  height={"270"}
                  className="border-transparent rounded-2xl hidden md:block"
                />
                <Image
                  src={image.mobile}
                  alt="product-image"
                  width={"350"}
                  height={"270"}
                  className="border-transparent rounded-2xl md:hidden block"
                />
                <div className="absolute -bottom-5  inset-x-20 lg:inset-x-10 md:inset-x-2"
                // onClick={addToCartHandler}
                >
                  <AddToCart />
                </div>
              </div>
              <div className="mt-6">
                <p className="text-rose-400 mb-1 font-thin text-category">
                  {category}
                </p>
                <p className="font-semi-bold text-names mb-1">{name}</p>
                <p className=" text-reed text-price">${price}</p>
              </div>
            </div>
          );
        })}
    </main>
  );
};

export default Products;
