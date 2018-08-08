import React, { Component } from 'react';

import './Todo.css';



class Todo extends Component {
    constructor(props) {
        super(props);
    }
    onMarkComplete = () => {
        console.log(this.props.completed)
        return (!this.props.completed) ?
            this.todo.style.textDecoration = 'line-through' :  this.todo.style.textDecoration = 'none'
    }
    render() {
        return (
            <div 
                className="todo" 
                ref={todo => this.todo = todo} 
                onClick={() => { this.onMarkComplete() }}
             >
                <div className="title" onClick={this.props.handleClick}>{this.props.name}</div>
                <div className="btns">
                    <button onClick={this.props.handleDelete}>delete</button>
                </div>
            </div>
        );
    }
}

export default Todo;