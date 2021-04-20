import React, { useRef } from 'react';
import Panel from '../../Components/organisms/Panel/Panel';



import Login from '../../Components/organisms/Form/Login';
// import Register from '../../Components/organisms/Form/Register';

// redux funciones
import { connect } from 'react-redux'; // emtodo base
// import index from '../../redux/store/index';// la store
import FnUpdateWord from '../../redux/store/palabra/action'; //los aciones
const Index = () => {

  function swapForma() {
    alert('cambiar formulario');
  }
  const palabraRef = useRef(null);
  return (
    <>

      {/*  */}
      <input type="text" ref={palabraRef} />
      <button
        onClick={() => { FnUpdateWord(palabraRef.current.value) }}
      >guardar en store</button>

      {/*  */}

      <Login press={swapForma} />
      <Panel />


    </>
  )

};

export default connect(null, { FnUpdateWord })(Index)