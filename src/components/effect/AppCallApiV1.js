import React, { useCallback, useState } from 'react';
import {isEmptyOrNil} from '../../common/function'

function AppCallApiV1(props) {

    const [user, setUser] = useState('')

    const getData = (type) => {
        return fetch(`https://jsonplaceholder.typicode.com/${type}?id=1`)
    }

    const handleOnCallApi = useCallback((type) => {
        getData(type)
            .then((response) => response.json())
            .then((response) => {
                setUser(response)
            })
            .catch((error) => { console.log(error) })
    }, [])

    return (
        <div>
            {!isEmptyOrNil(user) && <p>{JSON.stringify(user)}</p>}
            <button onClick={() => handleOnCallApi('users')}>Call Api</button>
        </div>
    );
}

export default AppCallApiV1;