import React from 'react'
import classes from './Experience.module.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import SrijconLogo from '../../../Assets/Logos/SrijconLogo.svg'
import BarberaLogo from '../../../Assets/Logos/BarberaLogo.png'
const data = [
  {
      "logo": SrijconLogo,
      "org":"Srijcon",
      "role":"ReactJS Developer Intern",
      "duration": "(Mar 2023- Jul 2023)",
      "tech": ['ReactJS', 'CSS', 'Redux', 'UI', 'UX', 'Figma'],
    "description": [],
      "color":'red'
  },
  {
    "logo": BarberaLogo,
    "org":"Barbera",
    "role":"Frontend Developer Intern",
    "duration": "(Oct 2021- Nov 2021)",
    "tech": ['HTML', 'JavaScript', 'CSS', 'UI', 'UX'],
    "description": [],
    "color":'black'
  },
  
]

const Experience = () => {
  return (
    <div className={classes.section}>
      <div className={classes.heading}>
        GIG <br/> QUEST
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <ExperienceCard key={key} logo={item.logo} org={item.org} duration={item.duration} role={item.role} tech={item.tech} description={item.description} color={item.color} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Experience
