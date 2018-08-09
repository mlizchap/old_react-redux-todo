import React, { Component } from 'react';
import './AddTodo.css';

import { createTodo } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: '', 
            showError: false
        }
    }
    submitTodo = (e) => {
        e.preventDefault();
        
        if (this.state.input) {
            if (this.props.todos.every(t => t.name.toLowerCase() !== this.state.input.toLowerCase())) {
                this.props.createTodo(this.state.input)
            } else {
                this.setState({ showError: true })
            }
        }
        this.setState({ input: '' })
    }
    handleChange = (e) => {
        if (this.state.input && this.state.showError) {
            this.setState({ showError: false })
        } 
        this.setState({input: e.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitTodo(e)} className="inputForm">
                    <input className="addTodoInput" type="text" value={this.state.input} onChange={(e) => this.handleChange(e)} />
                    <input className="submitBtn" type="submit" value="+" />
                </form>
                <div className="errorMessage">
                    {(this.state.showError) ? <p>todo is already used!</p> : <p><br /></p>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {todos: state.todos}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createTodo: createTodo }, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
