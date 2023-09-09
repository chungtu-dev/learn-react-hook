// import React, {useContext} from 'react';
// import {StoreContext} from './store'
import {useStore, actions} from './store'

function AppGlobalState(props) {
    // const state = useContext(StoreContext)
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }

    return (
        <div>
            <input
                value={todoInput}
                placeholder="Enter todo... "
                onChange={e=>{
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add todo</button>

            {
                todos.map((todo, index)=>(
                    <li key={index}>{todo}</li>
                ))
            }
        </div>
    );
}

export default AppGlobalState;