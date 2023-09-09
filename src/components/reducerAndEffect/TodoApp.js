import React, { useContext, useReducer } from 'react';
import '../../App.css'
import {Context} from './ThemeContext'

const initState = {
    todo: '',
    todos: []
}

const SET_TODO = 'set_todo'
const ADD_TODO = 'add_todo'
const DELETE_TODO = 'delete_todo'

const setTodo = payload => {
    return {
        type: SET_TODO,
        payload: payload
    }
}

const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}

const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload: payload
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.payload //set lại 1 todo (=> todo)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload] // set lại nhiều todo => (=> todos)
            }
        case DELETE_TODO:
            const newState = [...state.todos]
            newState.splice(action.payload, 1)
            return {
                ...state,
                todos: newState //delete item in list (=> todos)
            }
        default:
            throw new Error(`Invalid action`)
    }

}

const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const { todo, todos } = state
    const context = useContext(Context)
    
    return (
        <div>
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider round"></span>
            </label>
            <input
                value={todo}
                onChange={e => dispatch(setTodo(e.target.value))}
            />
            <button onClick={() => dispatch(addTodo(todo))}>Add</button>
            <ul>
                {
                    todos.map((todo, index) => (
                        <p key={index}>
                            <li>{todo}</li>
                            <span onClick={() => dispatch(deleteTodo(index))}>&times;</span>
                        </p>
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoApp;