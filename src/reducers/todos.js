const initState = {
    id: 0,
    completed: false,
    text: ''
}

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                completed: false,
                text: action.text
            }
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })
        default:
            return state
    }
}

const todos = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state,action)
            ]
        case 'TOGGLE_TODO':
            return state.map((item) => {
                return todo(item,action)
            })
        default:
            return state
    }
}

export default todos
