import React from 'react';


function Index(props) {
  const { id } = props

  return (

    <label htmlFor={id}>
      <input type="text" id={id} />
    </label>
  );
}


export default Index;
