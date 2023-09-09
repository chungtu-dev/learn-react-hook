import Parent from './Parent';
import { ThemeProvider } from './ThemeContext'

function Grandpa(props) {
    return (
        <ThemeProvider>
            <Parent/>
        </ThemeProvider>
    );
}

export default Grandpa;