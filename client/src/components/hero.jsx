import React from 'react'
import { Row, Col, Image } from 'antd'
import { SmileTwoTone } from '@ant-design/icons';
import { useContext } from 'react';
import ThemeContext from '../state/ThemeContext';

export default function Hero() {

    const { theme } = useContext(ThemeContext)
    return <Row className="hero">
        <Col span="6">
            <div className="hero_card" style={theme.hero}>
                <div className="hero_card__upper" style={theme.heroUpper}>
                    <div className="image">
                        <Image
                            style={theme.avatarOutline}
                            className="avatar"
                            width={150}
                            src={theme.avatar}
                            fallback="images/404error.jpg"
                        />
                    </div>
                    <h2 style={theme.heroText}>Samuel Kanyi</h2>
                    <h3 style={theme.heroText}>Kenya</h3>
                    <p style={theme.heroText}>Android Developer and Full-Stack Engineer</p>
                </div>
                <div className="hero_card__lower" style={theme.heroBottom}>
                    <h4 style={theme.heroText}>Skills</h4>
                    <div className="skills_button">
                        <span style={theme.stack_span}>UI/UX</span>
                        <span style={theme.stack_span}>Javascript</span>
                        <span style={theme.stack_span}>React</span>
                        <span style={theme.stack_span}>Node</span>
                        <span style={theme.stack_span}>Android</span>
                        <span style={theme.stack_span}>Kotlin</span>
                        <span style={theme.stack_span}>Java</span>
                        <span style={theme.stack_span}>Dart</span>
                        <span style={theme.stack_span}>Front End Development</span>
                    </div>
                </div>
            </div>
        </Col>
        <Col span="2"></Col>
        <Col span="16">
            <p className="about" style={theme.about}>
                Hello Friend<SmileTwoTone twoToneColor={theme.smiley} /> My name is Samuel Kanyi and most of
                my friends call me Sam. I am a fullstack
                developer and currently staying in
                Kenya.
                I enjoy building mobile and web applications.
                Check out Some of the projects i've worked on below.

                </p>
        </Col>
    </Row>
}