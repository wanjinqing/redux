import React from 'react';
import ReactDOM from 'react-dom';


import Counter from './components/Counter';

import store from './redux/store';

import registerServiceWorker from './registerServiceWorker';

// middleware
// let next = store.dispatch;
// store.dispatch = function dispatchAndLog(action) {
//   console.log('dispatching', action);
//   setTimeout(() => {
//     next(action);
//     console.log('next state', store.getState());
//   }, 1000)
// }
const addAction = type => (dispatch, getState) => {
    dispatch({type: 'INCREMENT'});
};


const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState().counter}
            onIncrement={() => store.dispatch(addAction())}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('root')
    );
};

render();
store.subscribe(render);


registerServiceWorker();

