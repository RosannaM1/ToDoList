import React from 'react';
//subtitulo de la pagina, recibe un parametro de texto lo que lo hace reusable
const SubTitle = ({ text }) => {
  return (
    <div className=" text-2xl font-extrabold dark:text-blue p-2 m-2">
      {text}
    </div>
  );
};

export default SubTitle;