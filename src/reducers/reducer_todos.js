import {CREATE_TODO, DELETE_TODO} from '../actions';
import {MARK_COMPLETE} from '../actions';

export default function(state=[], action) {
    switch (action.type) {
        case CREATE_TODO:
            return [...state, {name: action.payload, completed: false }];
        case MARK_COMPLETE:
            return state.map(todo => {
                return (todo.name == action.payload) ? {...todo, completed: !todo.completed} : todo
            })
        case DELETE_TODO: 
            return state.filter(todo => {
                return todo.name !== action.payload
            })
        default: 
            return state
    }
}

const test = [
    { name: 'test 1', completed: false },
    { name: 'test 2', completed: false }
]