'use client';

import { useState } from 'react';

const ClickDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className='text-slate-50'>value: {count}</div>
      <button
        className='bg-slate-50 text-gray-900 font-medium text-xl px-4 py-2 rounded-md'
        onClick={() => setCount((prev) => ++prev)}
      >
        Increase
      </button>
    </div>
  );
};

export { ClickDemo };
