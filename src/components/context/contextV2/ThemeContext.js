import React, { createContext, useState } from 'react';

const Context = createContext()

function ThemeContext({children}) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme, toggleTheme
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export {
    Context, ThemeContext
}