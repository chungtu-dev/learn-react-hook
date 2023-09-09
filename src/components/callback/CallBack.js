import React, { useCallback, useState } from 'react';
import CallBackChild from './CallBackChild';

function CallBack(props) {

    const [user, setUser] = useState([])

    const getData = (type) => {
        return fetch(`https://reqres.in/api/${type}?page=1`)
    }

    const handleGetDataUsers = () => {
        getData('users')
            .then((response) =>response.json())
            .then((response) => {
                const data = response.data
                // console.log('users', user);
                setUser(data)
            })
            .catch((error) => { console.log(error); })
    }

    return (
        <div>
            <button onClick={handleGetDataUsers}>Users</button>
            <p>{JSON.stringify(user)}</p>
            <CallBackChild getData={getData} />
        </div>
    );
}

export default CallBack;