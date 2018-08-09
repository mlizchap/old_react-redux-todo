import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.todo = React.createRef();
    }
    
    onMarkComplete() {
        this.props.handleClick();
        if (this.todo.current.style.textDecoration = 'none') {
            this.todo.current.style.textDecoration = 'aqua line-through'
        } else {
            this.todo.current.style.textDecoration = 'none'
        }
   
    }
    render() {
        return (
            <div className="todo" ref={this.todo} onClick={this.onMarkComplete.bind(this)}>
                <div className="title">{this.props.name}</div>
                <div className="btns">
                    <button onClick={this.props.handleDelete}>delete</button>
                </div>
            </div>
        );
    }
}

export default Todo;