ThemeContext => (create Context) => action, state,...

UseContext => use Context (from Theme Context)

Content => child of UseContext

AppContext : 
        <ThemeContext> -> using state or function
            <UseContext/> -> prop to child
        </ThemeContext>