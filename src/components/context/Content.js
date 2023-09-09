import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'

function Content(props) {
    const context = useContext(ThemeContext)
    return (
        <div>
            <p className={context.theme}>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
    );
}

export default Content;