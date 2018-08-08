import React, { Component } from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markCompleted } from '../actions';
import { deleteTodo } from '../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    changeStatus = (todo) => {
        this.props.markCompleted(todo)
        // action for changeing complete => incomplete
    }
    deleteTodo = (todo) => {
        this.props.deleteTodo(todo);
        // action for deleting the todo 
    }
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => {
                    return <Todo 
                                key={index} 
                                name={todo.name} 
                                completed={todo.completed} 
                                handleClick={() => this.changeStatus(todo.name)} 
                                handleDelete={() => this.deleteTodo(todo.name)}
                            />
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ markCompleted, deleteTodo }, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps )(TodoList);