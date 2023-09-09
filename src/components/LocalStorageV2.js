import React, { useEffect, useState } from 'react'
import '../index.css'
import {v4 as uuidV4} from 'uuid'

const LocalStorageV2 = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState('')

    const setDataAddTask = (dataValue) =>{
        const id = uuidV4()
        const newData = {id, ...dataValue}
        setData(data, newData)
        localStorage.setItem('new Store', JSON.stringify([...data, newData]))
    }

    const getDataFromStore = JSON.parse(localStorage.getItem('new Store'))

    useEffect(() => {
        if(getDataFromStore == null){
            setData([])
            console.log('data null')
        }
        else{
            console.log('data', data)
            setData(getDataFromStore)
        }
    },[])

    const addData = () => {
         if(!text){
            setText('')
         }
         else{
            setDataAddTask({text})
         }
         setText('')
    }

    return (
        <>
            <div className="form_todo">
                <div>LocalStorageV2</div>
                <form className="form_todo_form" onSubmit={addData}>
                    <label className="form_todo_label">Tasks:</label>
                    <input className="form_todo_input" type="text" value={text} onChange={e=>setText(e.target.value)}/>
                    <input className="form_todo_button" type="submit" value="Add Data"/>
                </form>
            </div>
        </>
    )
}

export default LocalStorageV2