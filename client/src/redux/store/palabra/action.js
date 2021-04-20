const FnUpdateWord = (palabra)=>{
  console.log('llegamos')
  console.log(palabra)
  return {
    type:'UPDATE_WORD',
   payload:palabra
  }
}

export default FnUpdateWord;