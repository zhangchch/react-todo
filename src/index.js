import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './component/App'
import todoAPP from './reducers/index'
import { addTodo, setVisibilityFilter } from './action/index'

let store = createStore(todoAPP);

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))
store.dispatch(setVisibilityFilter('SHOW_ACTIVE'))

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)