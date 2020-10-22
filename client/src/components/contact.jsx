import React from 'react'
import { TwitterCircleFilled, TwitterOutlined, GithubFilled, GithubOutlined, LinkedinFilled, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import ThemeContext from '../state/ThemeContext';
import { Typography, Popover } from 'antd'

const { Title } = Typography
export default function Contact() {
    const { theme, isDark } = useContext(ThemeContext);
    return <div className="social">
        <Title style={theme.heading} level={3}>CONTACT ME</Title>
        <div class="mobile_email">
            <p><PhoneOutlined /> +254 716-276-879</p>
            <p><MailOutlined />amshelkanyi@gmail.com</p></div>

        <div className="social_icons">
            {
                isDark ?
                    <>
                        <Popover title="TWITTER"><TwitterCircleFilled style={theme.social} /></Popover>
                        <Popover title="GITHUB"><GithubFilled style={theme.social} /></Popover>
                        <Popover title="LINKEDIN"><LinkedinFilled style={theme.social} /></Popover>
                    </>
                    :
                    <>
                        <Popover title="TWITTER"><TwitterOutlined style={theme.social} /></Popover>
                        <Popover title="GITHUB"><GithubOutlined style={theme.social} /></Popover>
                        <Popover title="LINKEDIN"><LinkedinOutlined style={theme.social} /></Popover>
                    </>
            }
        </div>

    </div>
}