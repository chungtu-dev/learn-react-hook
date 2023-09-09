import React, { useEffect, useReducer, useRef } from 'react';
import './index.css'
// initState
const initState = {
    job: '',
    jobs: [],
}

//actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload: payload,
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload: payload,
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload: payload,
    }
}

//reducer
const reducer = (state, action) => {
    // console.log('prev state:', state);
    let newState;
    switch(action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
        break
        case ADD_JOB:
            newState = {
                ...state,
                jobs:[...state.jobs, action.payload]
            }
        break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
        break
        default:
            throw new Error('Invalid action')
    }
    // console.log('next state:', newState);
    return newState
}

const AppUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    return (
        <div style={{ padding: '0 20px' }}>
            <h3>Todo</h3>
            <input
            ref={inputRef}
             placeholder='input todo' 
             value={job}
             onChange={e=>dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>add</button>
            <ul style={{ listStyle: 'none' }}>
                {
                    jobs.map((job, index) => (
                        <li key={index}>{job}<span onClick={()=>dispatch(deleteJob(index))}>&times;</span> </li>
                    ))
                }
            </ul>

            {/* <div className="outercube cube">
                <div className="innercube cube">
                    <div className="innercube2 cube"></div>
                </div>
            </div> */}

        </div>
    );
};

export default AppUseReducer;