import React from 'react'
import classes from './EducationCard.module.css'

const EducationCard = (props) => {
  return (
    <div className={classes.card}>
        <div className={classes.logo}>
              <img src={props.logo} alt="logo" />
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
