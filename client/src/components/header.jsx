import React, { useContext } from 'react'
import { Switch, Row, Col, Alert } from 'antd';
import ThemeContext from '../state/ThemeContext';


export default function Header() {
    const { changeTheme, theme, isDark } = useContext(ThemeContext);

    return <>
        <Row className="header">
            <Col span="4">Switch Theme: <Switch onChange={() => changeTheme()} checkedChildren="light" unCheckedChildren="dark" /></Col>
            <Col span="5"></Col>
            <Col span="6">
                <Alert message="Currently Available for work" type="info" showIcon />

            </Col>
            <Col span="5"></Col>
            <Col span="4">
                {
                    isDark ? <box-icon name='moon' size="lg" type="solid" animation='tada' color='#BF1650' ></box-icon> :
                        <box-icon name='sun' type='solid' size="lg" animation='burst' rotate='180' color='#BF1650' ></box-icon>

                }
            </Col>
        </Row>
        <hr className="cool" style={theme.hr} />

    </>
};