import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // store.dispatch的参数可以是函数
import reducer from './reducer';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;