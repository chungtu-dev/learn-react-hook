import React, { useEffect, useState } from 'react';

function ResApi(props) {
    const [datas, setDatas] = useState('')

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/users?id=1`)
        .then((response)=>response.json())
        .then((response)=>{
                const i = response
                console.log('i', i);
                setDatas(i)
            })
        .catch((error)=>{ console.log(error);})
    },[])

    return (
        <div>
            <p>{JSON.stringify(datas)}</p>
        </div>
    );
}

export default ResApi;