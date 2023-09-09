import React, { useContext } from 'react';
import Content from './Content';
import {ThemeContext} from './ThemeContext'

function Parent(props) {
    const context = useContext(ThemeContext)
    return (
        <div>
            <div style={{ padding: 20 }}>
                <button onClick={context.toggleTheme}>Toggle Theme</button>
                <Content />
            </div>
        </div>
    );
}

export default Parent;