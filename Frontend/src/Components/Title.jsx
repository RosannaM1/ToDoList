import React from 'react';
//Titulo de la pagina, recibe un parametro de texto lo que lo hace reusable

const Subtitle = ({ text }) => {
  return (
    <div className="bg-red-500 text-white text-center font-medium p-2 fixed top-0 w-full h-10">
      {text}
    </div>
  );
};

export default Subtitle;
