import React, { useContext, useState, useEffect } from 'react';
import '../node_modules/antd/dist/antd.min.css'
import './scss/global.scss'
import './scss/loader.scss'
import Header from './components/header';
import Hero from './components/hero';
import ThemeContext from './state/ThemeContext';
import 'boxicons';
import Project from './components/projects';
import Loader from './components/loader';
import Contact from './components/contact';
import Footer from './components/footer';
import Copyright from './components/copyright';


function App() {
  const [loaded, setLoaded] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("https://blooming-dawn-96645.herokuapp.com/project").then(response => response.json()).then(projects => {
      setProjects(projects)
      setLoaded(true)
    })
  }, [])
  const { theme } = useContext(ThemeContext)
  console.log(theme.app);
  return (
    <div className="App" style={theme.app}>
      {
        loaded ? <>
          <Header />
          <Hero />
          <Project projects={projects} />
          <Contact />
          <Footer />
          <Copyright />
        </> : <Loader />
      }
    </div>
  );
}

export default App;
