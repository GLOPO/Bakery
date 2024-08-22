import React from 'react'
import Items from "../data.json";
import remove from '../../public/assets/images/icon-remove-item.svg'
import Image from "next/image";
import carbon from '../../public/assets/images/icon-carbon-neutral.svg'

const FullCart = () => {
  return (
    <main>
      <div className="my-4">
        {Items &&
          Items.map((item) => {
            return (
              <div key={item.id} className="mt-4 mb-4 flex  items-center justify-between border-b border-b-rose-900">
                <div className="flex flex-col gap-1">
                <p className="font-semi-bold text-category mb-1">{item.name}</p>
                  <div className="text-rose-300 mb-1 font-thin text-category flex gap-3">
                    <p className="text-reed font-semi-bold">1x</p>
                    <p>@${item.price}</p>
                    <p className="font-bold mb-2">${item.price}</p>
                  </div>
                </div>

                <div className="mb-4 border rounded-full p-0.5 border-rose-300 cursor-pointer hover:border-rose-900" >
                  <Image src={remove} alt=""/>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex justify-between my-5">
        <p className="text-category ">Order Total</p>
        <p className="text-cart font-bold">$0</p>
      </div>

      <div className="flex my-3 bg-rose-100 p-3 border-transparent rounded gap-1 justify-center items-center">
        <Image src={carbon} alt=""/>
        <p className="text-category">This is a <strong>carbon-neutral</strong> delivery</p>
      </div>

      <button type="submit" className=" w-full border-transparent rounded-full bg-reed p-3 text-rose-50">Confirm Order</button>
    </main>
  )
}

export default FullCart