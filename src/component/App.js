import React, { Component } from 'react'
import AddTodo from '../container/AddTodo'
import VisibleTodoList from '../container/VisibleTodoList'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default App