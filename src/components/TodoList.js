import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';
import { markCompleted, deleteTodo } from '../actions';

import './TodoList.css'

const TodoList = ({todos, markCompleted, deleteTodo}) => {
    return (
        <div>
            {todos.map((todo) => {
                return <Todo 
                            className="test"
                            key={todo.name} 
                            name={todo.name} 
                            completed={todo.completed} 
                            handleClick={() => markCompleted(todo.name)} 
                            handleDelete={() => deleteTodo(todo.name)}
                        />
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps, { markCompleted, deleteTodo } )(TodoList);