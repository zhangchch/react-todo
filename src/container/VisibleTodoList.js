import { connect } from 'react-redux'
import TodoList from '../component/TodoLIst'
import { toggleTodo } from '../action/index'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter((item) => { return item.completed })
        case 'SHOW_ACTIVE':
            return todos.filter((item) => { return !item.completed })
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList