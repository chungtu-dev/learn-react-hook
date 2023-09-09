import React, { useEffect, useState } from 'react';

function Effect(props) {

    const [action, setAction] = useState('')
    const [count, setCount] = useState(0)

    useEffect (()=>{
        document.title = `count ${count}`
        console.log('useEffect - render count');
    },[count])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${action}?id=1`)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{console.log(error);})
        console.log('useEffect - fetch API');

        return () => {
            console.log('clean up API');
        }
    },[action])


    useEffect(()=>{
        console.log('useEffect Data');
    },[])

    return (
        <div>
            <p>You have click {count} time</p>
            <button onClick={()=>setCount(count+1)}>count click</button>

            <button onClick={()=>setAction('users')}>Users</button>
            <button onClick={()=>setAction('posts')}>Posts</button>
        </div>
    );
}

export default Effect;