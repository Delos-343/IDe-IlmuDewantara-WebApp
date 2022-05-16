import React from 'react'

function CourseHeaderRecord({details}) {

    const sentences = details.description.split(".");
    sentences.splice(sentences.length - 1, 1);

  return (
    <div className='bg-gray-200 py-20 px-10 flex flex-col items-center'>
        <h1 className='text-2xl text-center text-gray-600 font-bold'>
            {details.smallTitle}
            <span className='block text-gray-900 text-6xl font-bold mb-10'>
                {details.bigTitle}
            </span>
        </h1>
        {sentences.map((sentence, index) => <p key={index}
                                               className='text-center text-gray-500
                                                          mx-auto text-lg max-w-lg'>
            {sentence}
        </p>)}
        <a href="#Pricing" className='rounded-md bg-yellow-300 py-3 px-4 mt-8
                                    text-gray-800 text-xl font-semibold hover:bg-yellow-400'>
            {details.buttonText}
        </a>
    </div>
  )
}

export default CourseHeaderRecord