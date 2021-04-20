import React from 'react';
import Panel from '../../Components/organisms/Panel/Panel';



import Login from '../../Components/organisms/Form/Login';
// import Register from '../../Components/organisms/Form/Register';



const Index = () => {
  function swapForma() {
    alert('cambiar formulario');
  }
  return (
    <>
      <Login press={swapForma} />
      <Panel />


    </>
  )

};

export default Index;
