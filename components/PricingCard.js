import React from 'react'

function PricingCard({details}) {

  if(details.featured) {
    return (
      <div className='w-full bg-gray-200 max-w-sm rounded-lg p-6 border-yellow-400 border-4'>
          <h3 className='text-purple-700 text-xl mb-4 uppercase'>
            {details.title}
          </h3>
          <p className='text-purple-700 text-2xl font-bold mb-10'>
            {details.isFree ? <span> FREE </span> : <span> {details.priceInCents} </span>}
            {details.priceSuffix && <span className='text-lg m-1'> {details.priceSuffix} </span>}
          </p>
          <ul>
            {details.description.split('*').map((bullet, index) => (
              <li className='text-purple-900 my-2 text-sm' key={index}>
                {bullet}
              </li>
            ))}
          </ul>
          <button className='mx-auto w-full block bg-purple-700 px-4 py-2 rounded-md mt-6 mb-4 font-semibold text-gray-300'>
            {details.buttonText}
          </button>
          {details.finePrint && <small className='text-purple-700 block text-center text-sm'> {details.finePrint} </small>}
      </div>
    )
  }

  else {
    return(
      <div className='w-full bg-purple-700 max-w-sm rounded-lg p-6'>
          <h3 className='text-gray-100 text-xl mb-4 uppercase'>
            {details.title}
          </h3>
          <p className='text-gray-100 text-2xl font-bold mb-10'>
            {details.isFree ? <span> FREE </span> : <span> {details.priceInCents} </span>}
            {details.priceSuffix && <span className='text-lg m-1'> {details.priceSuffix} </span>}
          </p>
          <ul>
            {details.description.split('*').map((bullet, index) => (
              <li className='text-purple-300 my-2 text-sm' key={index}>
                {bullet}
              </li>
            ))}
          </ul>
          <button className='mx-auto w-full block bg-yellow-500 px-4 py-2 rounded-md text-gray-100 mt-6 mb-4 font-semibold'>
            {details.buttonText}
          </button>
          {details.finePrint && <small className='text-purple-300 block text-center text-sm'> {details.finePrint} </small>}
      </div>
    )
  }
}

export default PricingCard