/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

function CalloutRecord({details}) {
  return (
    <div className='bg-gray-800 py-20 px-10'>
        <div className='flex flex-col max-w-6xl md:flex-row md:items-center mx-auto'>
          <div className='md:w-[60%' grow p-4>
            <h2 className='text-4xl text-gray-200 font-bold'>
              {details.smallTitle}
              <span className='block text-yellow-200 text-4xl leading font-bold mb-10'>
                {details.bigTitle}
              </span>
            </h2>
            <p className='text-gray-200 max-w-full sm:text-xl'>
              {details.description}
            </p>
            <div className='w-full p-4 mt-10 sm:m-0'>
              <Image
               width={details.image.width}
               height={details.image.height}
               src={details.image.url}
               alt={details.littleTitle + details.bigTitle} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default CalloutRecord