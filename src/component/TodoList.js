import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let todos = this.props.todos;
        return (
            <ul>
                {
                    todos.map((todo) => {
                        return (<Todo key={todo.id} text={ todo.text } completed={ todo.completed } onClick={ () => this.props.onTodoClick(todo.id) } />)
                    })
                }
            </ul>
        )
    }
}

export default TodoList