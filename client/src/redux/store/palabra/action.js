const FnUpdateWord = (palabra)=>{
  console.log('se ejecuto fnUpdateWord')
  return {
    type:'UPDATE_WORD',
   payload:palabra
  }
}

export default FnUpdateWord;