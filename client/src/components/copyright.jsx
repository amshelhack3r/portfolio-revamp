import React, { useContext } from 'react'
import ThemeContext from '../state/ThemeContext'

export default function Copyright() {
    const { theme } = useContext(ThemeContext)
    return <div className="built">
        <p>Website built using <span style={theme.built}>REACT</span> and <span style={theme.built}>REDUX</span> for frontend, <span style={theme.built}>NodeJS</span> and <span style={theme.built}>MongoDB</span> for backend</p>
    </div>
}