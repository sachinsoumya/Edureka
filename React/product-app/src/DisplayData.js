import React from 'react';

export const DisplayData = ({ name, pic }) => {
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <img className='pic' src={pic} alt={name} />

    </React.Fragment>
  );
};
