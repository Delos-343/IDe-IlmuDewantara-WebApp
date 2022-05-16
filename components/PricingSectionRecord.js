import React from 'react'
import PricingCard from './PricingCard'

function PricingSectionRecord({details}) {
  return (
    <div className='bg-purple-900 py-20 px-10 max-w-full'>
        <h1 className='text-center text-4xl sm:text-6xl font-bold text-gray-100 mb-20'>
          {details.title}
        </h1>
        <div className='flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-4 justify-center wrap max-w-6xl mx-auto items-center'>
          {details.pricingCards.map((card, index) => (
            <PricingCard details={card} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default PricingSectionRecord