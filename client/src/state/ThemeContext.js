import React, { useReducer } from 'react'
import { darkTheme, lightTheme } from './theme'


const initialState = {
    isDark: true,
    theme: darkTheme
};


const ThemeContext = React.createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            // console.log(state);
            return state.isDark ? {
                isDark: false,
                theme: lightTheme
            } : {
                    isDark: true,
                    theme: darkTheme
                }
        default:
            return state;
    }
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const changeTheme = () => dispatch({ type: "CHANGE_THEME" });

    return (
        <ThemeContext.Provider value={{
            changeTheme,
            theme: state.theme,
            isDark: state.isDark
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;