import React from 'react'
import classes from './Experience.module.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import SrijconLogo from '../../../Assets/Logos/SrijconLogo.svg'
import BarberaLogo from '../../../Assets/Logos/BarberaLogo.png'
const data = [
  {
      "logo": SrijconLogo,
      "link": 'https://www.srijcon.com/',
      "org":"Srijcon",
      "role":"ReactJS Developer Intern",
      "duration": "(Mar 2023- Jul 2023)",
      "tech": ['ReactJS', 'CSS', 'Redux', 'UI', 'UX', 'Figma'],
      "description": [],
    "color": 'red',
      "brief":"Improved the UI/UX and added several features to the website",
  },
  {
    "logo": BarberaLogo,
    "org": "Barbera",
    "link": 'https://barbera.netlify.app/',
    "role":"Frontend Developer Intern",
    "duration": "(Oct 2021- Nov 2021)",
    "tech": ['HTML', 'JavaScript', 'CSS', 'UI', 'UX'],
    "description": [],
    "color": 'black',
    "brief":"Created several pages from scratch for an online salon services website",
  },
  
]

const Experience = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        GIG <br/> QUEST
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <ExperienceCard key={key} brief={item.brief} link={item.link} logo={item.logo} org={item.org} duration={item.duration} role={item.role} tech={item.tech} description={item.description} color={item.color} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Experience
