import React, { createContext, useCallback, useState } from 'react';

const Context = createContext()

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const [data, setData] = useState('')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const logger = useCallback(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?id=1`)
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => console.log(error))
    }, [])

    const value = {
        theme, toggleTheme, logger, data
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export {
    ThemeContext, Context
};