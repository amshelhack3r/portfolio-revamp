import React from 'react'
import { useContext } from 'react'
import { CopyrightCircleTwoTone } from '@ant-design/icons'
import ThemeContext from '../state/ThemeContext'

export default function Footer() {
    const { theme } = useContext(ThemeContext)
    return <div className="footer">
        <div className="hr_container">
            <hr className="cool" style={theme.hr} />
        </div>
        <p>Design and Build by samuel kanyi</p>
        <p><CopyrightCircleTwoTone twoToneColor="#BF1650" /> copyright 2020</p>
    </div>
}