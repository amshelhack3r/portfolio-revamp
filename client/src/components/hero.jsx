import React from 'react'
import { Row, Col, Image, Card, Typography } from 'antd'
import { SmileTwoTone } from '@ant-design/icons';
import { useContext } from 'react';
import ThemeContext from '../state/ThemeContext';

const { Title } = Typography
const { Meta } = Card;
export default function Hero() {

    const { theme } = useContext(ThemeContext)
    return <Row className="hero">
        <Col span="6">
            <Card
                hoverable
                style={theme.avatarCard}
                cover={<img alt="example" src={theme.avatar} />}
            >
                <Meta title="Samuel Kanyi" description="Full-Stack Engineer" />
            </Card>
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