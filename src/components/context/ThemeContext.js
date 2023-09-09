import { useState, createContext } from 'react'

const ThemeContext = createContext();

function ThemeProvider({ children }) { //child ở đây ko phải prop mà là thành phần con cần truyền vào được khai báo trong component này
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    //truyền object cho đối tượng bao gồm value, function
    const value = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }