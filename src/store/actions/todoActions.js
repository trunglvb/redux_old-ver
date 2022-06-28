import axios from "axios";
export const markComplete = (id) => {
    const markCompleteAction = (dispatch) => {
        dispatch({
            type: "MARK_COMPLETE",
            payload: id,
        });
    };
    return markCompleteAction;
};

export const addTodos = (newTodos) => (dispatch) => {
    dispatch({
        type: "ADD_TODOS",
        payload: newTodos,
    });
};
export const getTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_limit=3"
        );
        dispatch({
            type: "GET_TODOS",
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const deleteTodo = (id) => (dispatch) => {
    dispatch({
        type: "DELETE_TODO",
        payload: id,
    });
};
