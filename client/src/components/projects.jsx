import React from 'react'
import { Typography } from "antd"
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './loader';

const { Title } = Typography;


export default function Project() {

    const [loaded, setLoaded] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/projects").then(response => response.json()).then(projects => {
            setProjects(projects)
            setLoaded(true)
        })
    }, [])
    return <>
        <Title level={2}>PROJECTS</Title>
        {
            loaded ?
                <ul>
                    <li className="booking-card" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1578944032637-f09897c5233d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" }}>
                        <div className="book-container">
                            <div className="content">
                                <button className="btn">VISIT</button>
                            </div>
                        </div>
                        <div className="informations-container">
                            <h2 className="title">MountainTop Website</h2>
                            <p className="sub-title">Tours and Travel Website</p>
                            <h4>BUILT USING</h4>
                            <div className="pills">
                                <span>React</span>
                                <span>Javascript</span>
                                <span>Laravel</span>
                            </div>
                        </div>

                    </li>
                </ul> : <Loader />
        }
    </>

}