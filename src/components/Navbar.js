import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Navbar = ({ todos }) => {
    const length = todos.length;
    return (
        <div className="navbar">
            <h1>My redux todo app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {length}</li>
            </ul>
        </div>
    );
};
const mapStateToProps = (state) => ({
    todos: state.myTodos.todos,
});

Navbar.propTypes = {
    todos: PropTypes.array.isRequired,
};
export default connect(mapStateToProps, {})(Navbar);
