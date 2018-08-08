import React, { Component } from 'react';
import './AddTodo.css';

import { createTodo } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { input: '' }
    }
    submitTodo = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state.input);
        this.setState({ input: '' })
    }
    handleChange = (e) => {
        this.setState({input: e.target.value})
    }
    render() {
        return (
            <form onSubmit={(e) => this.submitTodo(e)} className="inputForm">
                <input className="addTodoInput" type="text" value={this.state.input} onChange={(e) => this.handleChange(e)} />
                <input className="submitBtn" type="submit" value="+" />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createTodo: createTodo }, dispatch) 
}

export default connect(null, mapDispatchToProps)(AddTodo);
