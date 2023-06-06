import React from 'react'
import classes from './Home.module.css'
import AboutMe from './AboutMe/AboutMe'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import POR from './POR/POR'

const Home = () => {
  return (
    <div className={classes.wholePage}>
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <POR/>
        <Resume/>
    </div>
  )
}

export default Home
