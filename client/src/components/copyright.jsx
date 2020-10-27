import React, { useContext } from 'react'
import ThemeContext from '../state/ThemeContext'

export default function Copyright() {
    const { theme } = useContext(ThemeContext)
    return <div className="built">
        <p>Website built using
            <span style={theme.built}><box-icon name='react' type='logo' animation='spin' color='#07dbfa' ></box-icon>REACT</span> and
            <box-icon name='redux' type='logo' animation='spin' color='#6d40b4' ></box-icon><span style={theme.built}>REDUX</span> for frontend,
            <span style={theme.built}><box-icon name='nodejs' type='logo' animation='tada' color='#509941' ></box-icon>NodeJS</span> and
            <span style={theme.built}>MongoDB</span> for backend</p>
    </div>
}