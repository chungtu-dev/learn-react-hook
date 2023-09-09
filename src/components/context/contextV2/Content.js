import React, { useContext } from 'react';
import {Context} from './ThemeContext'

function Content(props) {
    const context = useContext(Context)
    return (
        <div>
            <p className={context.theme}>
                lorem ipsum dolor sit amet, consectetur adip
            </p>
        </div>
    );
}

export default Content;