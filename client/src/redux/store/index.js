import {createStore} from 'redux';// new store for this Project;

function reducers (){
  return {};
}


const index = () => {
 return{
   ...createStore(reducers) // crea store[reducers,middlwares]
 }
}
 


export default index;