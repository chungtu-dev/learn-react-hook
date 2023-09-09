import React, { useEffect, useState } from 'react';

function getTime(date){
    if(!date) return ""

     const hour = `0${date.getHours()}`.slice(-2);
     const minute = `0${date.getMinutes()}`.slice(-2);
     const second = `0${date.getSeconds()}`.slice(-2);

     return `${hour}:${minute}:${second}`;
 }

function ClockEffect(props) {

    const [timeString, setTimeString] = useState('')

    useEffect (()=>{
        const clockInterval = setInterval(()=>{
            const date = new Date();
            const newDate = getTime(date)

            setTimeString(newDate)
        },0)

        return () =>{
            console.log('clean up function');
            clearInterval(clockInterval)
        }
    },[])

    return (
        <div>
            <p>{timeString}</p>
        </div>
    );
}

export default ClockEffect;