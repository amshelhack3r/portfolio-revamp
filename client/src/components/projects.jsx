import React from 'react'
import { Typography, Button } from "antd"
import { GithubOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import ThemeContext from '../state/ThemeContext';

const { Title } = Typography;


export default function Project(props) {

    const randomNum = () => Math.floor(Math.random * 100)

    const projects = props.projects;
    const { theme } = useContext(ThemeContext)
    // console.log(projects);
    return projects.length > 0 ? <>
        <Title level={2} style={theme.heading}>PROJECTS</Title>
        <ul >
            {

                projects.map((project, index) => {
                    return (<li key={index} className="booking-card" style={{ backgroundImage: `url(images/${project.image})`, ...theme.project_container }}>
                        <div className="book-container">
                            <div className="content">
                                <a href={project.website} className="btn" target="_blank" rel="noopener noreferrer">VISIT</a>
                            </div>
                        </div>
                        <div className="informations-container" style={theme.info_card}>
                            <Title level={2} style={theme.heroText}>{project.title.toUpperCase()}</Title>
                            <p className="sub-title" style={theme.heroText}>{project.description}</p>
                            <h4 style={theme.heroText}>BUILT USING</h4>
                            <div className="pills">
                                {
                                    project.languages.map((language, index) => <span key={index} style={theme.pill}>{language}</span>)
                                }
                            </div>
                            {
                                project.repo ? <Button
                                    type="primary"
                                    href={project.repo}
                                    icon={<GithubOutlined />}
                                >GITHUB</Button> : <Button type="primary" icon={<GithubOutlined />} disabled>GITHUB(private)</Button>
                            }
                        </div>
                    </li>)
                })
            }
        </ul>
    </> : <h1>No data</h1>

}