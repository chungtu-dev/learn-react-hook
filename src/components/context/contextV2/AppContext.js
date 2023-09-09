import React from 'react';
import {ThemeContext} from './ThemeContext'
import UseContext from './UseContext';

function AppContext(props) {
    return (
        <ThemeContext>
            <UseContext/>
        </ThemeContext>
    );
}

export default AppContext;