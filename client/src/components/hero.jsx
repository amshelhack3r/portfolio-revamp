import React from 'react'
import { Row, Col, Image } from 'antd'
import { SmileTwoTone, DownOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import ThemeContext from '../state/ThemeContext';

export default function Hero() {
    const style = {
        width: "5%"
    }

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
                Hello Friend <SmileTwoTone twoToneColor={theme.smiley} /> My name is Samuel Kanyi.<br /> I am a fullstack
                developer and currently staying in Kenya.<br />
                I enjoy building mobile and web applications.
                </p>
            <p style={theme.about}>I am a decent football player<img style={style} src="images/soccer-player.png" alt="soccer" /> and a  phenomenal pool<img style={style} src="images/ball-pool.png" alt="pool" /> player</p>

            <p style={theme.about}>My interest at the moment is DevOps. More specific on Kubernates and Serverless architecture</p>

            <Row>
                <div class='cta'>
                    <span class='pulse-button'>
                        <DownOutlined style={{ fontSize: "40px" }} />
                    </span>
                </div>
            </Row>
        </Col>

    </Row>
}