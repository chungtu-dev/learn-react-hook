import React, { useContext } from 'react';
import Content from './Content';
import {ThemeContext} from './ThemeContext'

const MainContext = () => {
    return (
        <ThemeContext>
            <Content/>
        </ThemeContext>
    );
};

export default MainContext;