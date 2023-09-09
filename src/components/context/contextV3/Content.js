import React, { useContext } from 'react';
import {Context} from './ThemeContext'
const Content = () => {
    const context = useContext(Context)
    // console.log(context.theme);
    return (
        <div>
            <button onClick={context.toggleTheme}>Change theme</button>
            <button onClick={context.logger}>Data</button>
            <p>{JSON.stringify(context.data)}</p>
            <p className={context.theme}>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
    );
};

export default Content;