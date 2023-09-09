import React, { useContext } from 'react';
import Content from './Content';
import {Context} from './ThemeContext'

function UseContext(props) {
    const context = useContext(Context)
    console.log('aaa', context.theme);
    return (
        <div>
            <button onClick={context.toggleTheme}>Change color</button>
            <Content/>
        </div>
    );
}

export default UseContext;