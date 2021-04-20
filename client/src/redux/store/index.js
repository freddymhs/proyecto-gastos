import {createStore} from 'redux';// new store for this Project;
import {combineReducers} from 'redux' // para usar todos mis reducers

import palabraReducer from './palabra/reducer';

export const allReducers = combineReducers({
  palabraReducer:palabraReducer
});

const index = () => {
 console.log('se creo la store se supone')
 return{
   ...createStore(
     allReducers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
 }
}
 


export default index;