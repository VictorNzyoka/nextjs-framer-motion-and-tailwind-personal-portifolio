import React from 'react'

const Heading = ({text}) => {
  return (
    <h1 className='text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start'>
      {text}
    </h1>
  )
}

export default Heading
