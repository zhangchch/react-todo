import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoAPP = combineReducers({
    todos,
    visibilityFilter
})

export default todoAPP