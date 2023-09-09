import React, { useEffect, useState } from 'react';

function CallBackChild({getData}) {

    const [photo, setPhoto] = useState([])

    useEffect(()=>{
        getData('photos')
        .then((response)=>response.json())
        .then((response)=>{
            const photo = response.data
            setPhoto(photo)
        })
    },[getData])

    return (
        <div>
            <p>{JSON.stringify(photo)}</p>
        </div>
    );
}

export default CallBackChild;