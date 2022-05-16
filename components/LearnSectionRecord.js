import React from 'react'

function LearnSectionRecord({details}) {
  return (
    <div className='bg-gray-200 max-w-8xl mx-auto py-20 px-8'>
        <h1 className='text-4xl font-bold mb-8'>
          {details.title}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {details.learningPoints.map(point => (
            <div className='flex flex-col text-gray-600 bg-gray-50 rounded-lg' key={point.id}>
              <div className='py-3 px-3 flex items-center justify-between border-2 border-gray-500 rounded-t-lg text-gray-600 font-bold'>
                <div className='flex space-x-1.5'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                </div>
              </div>
              <div className='flex-grow flex items-center justify-center py-6 px-8 rounded-b-lg border-2 border-gray-500 border-t-0 text-center'>
                {point.title}
              </div>
            </div>
          ))}
        </div>
        <div className='mx-auto px-8 xl:px-0 py-24 text-6xl text-gray-600 md:flex md:justify-center space-y-10 md:space-x-20 md:space-y-0 max-w-7xl'>
          <div>
            <span className='font-bold text-gray-900 flex items-center'>
              <span> {details.hoursOfContent} </span>
              <span className='text-purple-500 text-4xl px-5'> + </span>
            </span>
            <span className='block mt-2 text-xl'>
              Minutes
            </span>
          </div>
          <div>
            <span className='font-bold text-gray-900 flex items-center'>
              <span> {details.numberOfLessons} </span>
              <span className='text-purple-500 text-2xl px-5'> Team </span>
            </span>
            <span className='block mt-2 text-xl'>
              Members
            </span>
          </div>
        </div>
    </div>
  )
}

export default LearnSectionRecord