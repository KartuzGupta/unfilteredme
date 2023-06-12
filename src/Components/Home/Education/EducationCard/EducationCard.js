import React from 'react'
import classes from './EducationCard.module.css'
import { Link } from 'react-router-dom'

const EducationCard = (props) => {
  return (
    <div className={classes.card}>
        <div className={classes.logo}>
            <Link to={props.link} target='_blank'> <img src={props.logo} alt="logo" /> </Link>
        </div>
        <div className={classes.description}>
            <div className={classes.heading}>
                {props.school}   
            </div>
            <div className={classes.matter}>
                {props.degree}
            </div>
            <div className={classes.matter}>
                {props.result}
            </div>
            <div className={classes.matter}>
                {props.year}
            </div>
        </div>
    </div>
  )
}

export default EducationCard
