import React, { useEffect, useState } from 'react';

function CallApi(props) {

    const [info, setInfo] = useState('')
    const [active, setActive] = useState(false)

    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?id=1`)
        .then((response)=>response.json())
        .then((response)=>{
            setInfo(response)
        })
        .catch((error)=>{ console.log(error)})
    },[])

    return (
        <div>
            {active && <p>{JSON.stringify(info)}</p>}
            {!active && <button onClick={()=>setActive(true)}>Show Data</button>}
            {active && <button onClick={()=>setActive(false)}>Hide Data</button>}
        </div>
    );
}

export default CallApi;