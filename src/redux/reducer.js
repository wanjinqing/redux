import { combineReducers } from 'redux'

import todos from './reducers/todos'
import counter from './reducers/counter'

const reducer = combineReducers({
    todos,
    counter
})

export default reducer;