import React from 'react'
import { TwitterCircleFilled, TwitterOutlined, GithubFilled, GithubOutlined, LinkedinFilled, LinkedinOutlined, MailOutlined, PhoneOutlined, RedditCircleFilled, RedditOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import ThemeContext from '../state/ThemeContext';
import { Typography, Popover } from 'antd'
import Download from '@axetroy/react-download';

const { Title } = Typography
export default function Contact() {
    const { theme, isDark } = useContext(ThemeContext);
    return <div className="social">
        <Title style={theme.heading} level={3}>CONTACT ME</Title>
        <div className="mobile_email">
            <p><PhoneOutlined /> +254 716-276-879</p>
            <p><MailOutlined />amshelkanyi@gmail.com</p></div>

        <div className="social_icons">
            {
                isDark ?
                    <>
                        <Popover title="TWITTER"><a href="https://twitter.com/amshelkanyi" rel="noopener noreferrer" target="_blank" ><TwitterCircleFilled style={theme.social} /></a></Popover>
                        <Popover title="GITHUB"><a href="https://github.com/amshelhack3r" rel="noopener noreferrer" target="_blank" ><GithubFilled style={theme.social} /></a></Popover>
                        <Popover title="LINKEDIN"><a href="https://www.linkedin.com/in/samuel-kanyi-341827a3/" rel="noopener noreferrer" target="_blank" ><LinkedinFilled style={theme.social} /></a></Popover>
                        <Popover title="REDDIT"><a href="https://www.reddit.com/user/amshel20" rel="noopener noreferrer" target="_blank" ><RedditCircleFilled style={theme.social} /></a></Popover>
                    </>
                    :
                    <>
                        <Popover title="TWITTER"><a href="https://twitter.com/amshelkanyi" rel="noopener noreferrer" target="_blank" ><TwitterOutlined style={theme.social} /></a></Popover>
                        <Popover title="GITHUB"><a href="https://github.com/amshelhack3r" rel="noopener noreferrer" target="_blank" ><GithubOutlined style={theme.social} /></a></Popover>
                        <Popover title="LINKEDIN"><a href="https://www.linkedin.com/in/samuel-kanyi-341827a3/" rel="noopener noreferrer" target="_blank" ><LinkedinOutlined style={theme.social} /></a></Popover>
                        <Popover title="REDDIT"><a href="https://www.reddit.com/user/amshel20" rel="noopener noreferrer" target="_blank" ><RedditOutlined style={theme.social} /></a></Popover>
                    </>
            }
        </div>
        <a href="resume_kanyi.pdf" target="_blank">
            <div style={theme.download} className="download">{
                isDark ? <box-icon name='download' size="lg" color="white"></box-icon>
                    : <box-icon name='download' type='solid' size="lg" color="#081229"></box-icon>}
            DOWNLOAD RESUME</div>
        </a>

    </div>
}