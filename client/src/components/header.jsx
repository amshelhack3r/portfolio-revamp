import React, { useContext } from 'react'
import { Switch, Row, Col, Alert, Space } from 'antd';
import ThemeContext from '../state/ThemeContext';


export default function Header() {
    const { changeTheme, theme } = useContext(ThemeContext);

    return <>
        <Row className="header">
            <Col span="4">Switch Theme: <Switch onChange={() => changeTheme()} checkedChildren="light" unCheckedChildren="dark" /></Col>
            <Col span="5"></Col>
            <Col span="6">
                <Alert message="Currently Available for work" type="info" showIcon />

            </Col>
            <Col span="5"></Col>
            <Col span="4"></Col>
        </Row>
        <hr className="cool" style={theme.hr} />

    </>
};