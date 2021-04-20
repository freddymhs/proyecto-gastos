import React, { useRef } from 'react';
import Panel from '../../Components/organisms/Panel/Panel';
import Login from '../../Components/organisms/Form/Login';
//
import { useSelector } from 'react-redux'; // obtiene redux
import { useDispatch } from 'react-redux'; // usa redux 
import FnUpdateWord from '../../redux/store/palabra/action'; //los aciones

const Index = () => {
  const mainDispatch = useDispatch();
  const res = useSelector(state => state.palabraReducer)
  console.log('--------')
  console.log(res)


  function swapForma() {
    alert('cambiar formulario');
  }


  const palabraRef = useRef(null);
  return (
    <>

      {/*  */}
      -
      <h1>{res}</h1>
      -
      <br />
      <input type="text" ref={palabraRef} />
      <button onClick={() => mainDispatch(FnUpdateWord())}      >
        guardar en store
      </button>

      {/*  */}

      <Login press={swapForma} />
      <Panel />


    </>
  )

};

// export default connect(null, {FnUpdateWord})(Index)
export default Index;