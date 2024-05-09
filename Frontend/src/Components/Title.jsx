import React from 'react';

const Subtitle = ({ text }) => {
  return (
    <div className="bg-red-500 text-white text-center font-medium p-2 fixed top-0 w-full h-10">
      {text}
    </div>
  );
};

export default Subtitle;
