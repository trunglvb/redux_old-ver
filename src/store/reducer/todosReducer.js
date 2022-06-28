const initialState = {
    todos: [],
};

//ham lang nghe va thau hieu
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MARK_COMPLETE":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                }),
            };
        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload,
            };

        case "ADD_TODOS": {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        }
        default:
            return state;
    }
};

export default todosReducer;
