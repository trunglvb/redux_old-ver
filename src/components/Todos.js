import React from "react";
import TodoForm from "./TodoForm";
import { markComplete, addTodos, deleteTodo, getTodos } from "../store/actions/todoActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
const Todos = ({todos, markComplete, deleteTodo, getTodos}) => {
    // const todos = useSelector((state) => state.myTodos.todos);
    useEffect (() => {
        getTodos()
    },[])
    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""} >
                        {todo.title}
                        <input type="checkbox" onChange={ () => markComplete(todo.id)} />
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

// state ching la store namg trpng file index


Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {markComplete, addTodos, deleteTodo, getTodos})(Todos);

