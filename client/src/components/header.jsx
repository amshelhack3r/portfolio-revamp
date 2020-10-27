import React, { useContext } from 'react'
import { Switch, Alert } from 'antd';
import ThemeContext from '../state/ThemeContext';


export default function Header() {
    const { changeTheme, theme, isDark } = useContext(ThemeContext);

    return <>
        <div className="header">
            <div span="4">Switch Theme: <Switch onChange={() => changeTheme()} checkedChildren="light" unCheckedChildren="dark" /></div>
            <div span="6">
                <Alert message="Currently Available for work" type="info" showIcon />

            </div>
            <div span="4">
                {
                    isDark ? <box-icon name='moon' size="lg" type="solid" animation='tada' color='#BF1650' ></box-icon> :
                        <box-icon name='sun' type='solid' size="lg" animation='burst' rotate='180' color='#BF1650' ></box-icon>

                }
            </div>
        </div>
        <hr className="cool" style={theme.hr} />

    </>
};