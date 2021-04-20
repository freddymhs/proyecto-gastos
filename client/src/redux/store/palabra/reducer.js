const palabraReducer = (palabra = 'mi frase default',action)=>{
  // console.log( 'IN REDUCER' );
  switch (action.type) {
    case 'UPDATE_WORD':
    palabra="lorem lorem lorem "
    return palabra
  
    case 'UPDATE_NUMBER':
    palabra="128371932893821"
    return palabra

    default:
        return palabra;
  }
}

export default palabraReducer;