import React, { useContext } from 'react';
import TodoApp from './TodoApp';
import {Context} from './ThemeContext';

const MainApp = () => {
    const context = useContext(Context)
    return (
        <div>
            <TodoApp/>
        </div>
    );
};

export default MainApp;