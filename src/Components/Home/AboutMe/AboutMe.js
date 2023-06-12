import React from 'react'
import classes from './AboutMe.module.css';

const AboutMe = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      About Me
    </div>
  )
}

export default AboutMe
