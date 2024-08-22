import React from 'react'
import Products from './components/Products'
import CartSection from './components/CartSection'

const page = () => {
  return (
    <main className='mx-auto container grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 lg:gap-8 p-5 md:p-16 bg-rose-100'>
      <div className='md:col-span-8'>
        <h1 className='font-bold text-dessert'>Desserts</h1>
        <Products />
      </div>

{/* cart component  */}
      <div className='md:col-span-4 bg-rose-50 h-fit p-8 border-transparent rounded'>
        <CartSection />
      </div>
    </main>
  )
}

export default page