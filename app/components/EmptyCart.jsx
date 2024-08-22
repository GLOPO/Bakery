import React from 'react'
import empty from '../../public/assets/images/illustration-empty-cart.svg'
import Image from "next/image";

const EmptyCart = () => {
  return (
    <main className='flex flex-col justify-between items-center gap-6'>
      <div>
        <Image src={empty} alt=''/>
      </div>
      <p className='text-rose-500 font-semi-bold text-price'>Your added items will appear here</p>
    </main>
  )
}

export default EmptyCart