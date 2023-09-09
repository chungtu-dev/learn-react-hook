import React, { useState } from 'react';

function StateFunc(props) {
    const [user, setUser] = useState({
        name: "Texting...",
        age: 13
    })

    const hanldOnChange = () => {
        setUser({user: "Texting_func"})
    }

    return (
        <div style={{backgroundColor: '#B8B8B8'}}>
            <small>State Func</small>
            <p>{JSON.stringify(user)}</p>
            <button onClick={()=>hanldOnChange()}>clickFunc</button>
        </div>
    );
}

export default StateFunc;