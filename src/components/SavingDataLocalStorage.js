import React, { useEffect, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

const SavingDataLocalStorage = () => {
    const [dataItem, setDataItem] = useState([])

    const [text, setText] = useState('')

    const addTask = (newTaskItem) => { 
        const id =uuidV4();
        const newTask = {id, ...newTaskItem}
        setDataItem(...dataItem, newTask)
        localStorage.setItem('Đây là kho chứa item',JSON.stringify([...dataItem,newTask]))
    }

    const getDataItemInLocalStorage = JSON.parse(localStorage.getItem('Đây là kho chứa item'))

    useEffect(()=>{
        if(getDataItemInLocalStorage === null){
            setDataItem([])
        }
        else{
            // setDataItem(getDataItemInLocalStorage)

            const sortData = [...getDataItemInLocalStorage].sort((a,b)=>{
                return b.first > a.first ? 1 : -1
            })
            setDataItem(sortData)
            console.log('log',getDataItemInLocalStorage)
        }
    },[])

    const onSubmitData = (e) => {
        e.preventDefault();
        if(!text){
            setText('')
        }
        else{
            addTask({text})
        }
        setText('')
    }

    return (
        <>
        <div>SavingDataLocalStorage</div>
        <form onSubmit={onSubmitData}>
            <label>New Text &emsp;</label>
            <input type="text" placeholder="add new text..."value={text} onChange={e=>setText(e.target.value)}/>
            &emsp;
            <input type="submit" value="Save"/>
            {
                getDataItemInLocalStorage?.map((item, index)=>(
                    <p key={index}>{item.text}</p>
                ))
            }
        </form>
        </>
    )
}

export default SavingDataLocalStorage