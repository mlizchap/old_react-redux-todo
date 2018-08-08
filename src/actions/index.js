export const CREATE_TODO = 'CREATE_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

export function createTodo(input) {
    return { 
        type: CREATE_TODO,
        payload: input
    }
}

export function markCompleted(todo) {
    return {
        type: MARK_COMPLETE,
        payload: todo
    }
}

export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}