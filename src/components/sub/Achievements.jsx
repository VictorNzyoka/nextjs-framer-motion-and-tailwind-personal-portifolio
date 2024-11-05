import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Achievements = ({ title, amount, children }) => {
  const number = useMotionValue(0);

  // Start counting only when client renders
  useEffect(() => {
    let i = 0;
    const updateCount = () => {
      let timeOut;
      if (i <= amount) {
        number.set(i++);
        timeOut = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeOut);
      }
    };
    updateCount();
  }, [amount, number]); // adding 'number' as dependency to be safe

  return (
    <div className='flex items-end gap-x-3'>
      <span className='text-4xl lg:text-2xl text-gray-300 '>{children}</span>
      <h1 className='flex flex-col gap-y-2'>
        <motion.span
          className='text-2xl lg:text-xl font-light text-blue-500'
        >
          {number}
        </motion.span>
        <span className='text-sm tracking-wide text-gray-500'>{title}</span>
      </h1>
    </div>
  );
};

export default Achievements;
