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
    "description": ['Added a feature that allows users to crop and edit their images before uploading it to the site which has been merged with the code in production', 'Improved the existing facility for uploading content by adding a functionality that allows users to upload and edit multiple media files at once in more convenient and time efficient manner', 'Improved UI/UX of pages and designed a better landing page on figma', 'Participated in daily meetings with the team to discuss goals and upadate them on my progress'],
    "color": 'red',
    "brief":"Srijcon is a platform where creators can showcase their creations and ideas",
  },
  {
    "logo": BarberaLogo,
    "org": "Barbera",
    "link": 'https://barbera.netlify.app/',
    "role":"Frontend Developer Intern",
    "duration": "(Jul 2021- Oct 2021)",
    "tech": ['HTML', 'JavaScript', 'CSS', 'UI', 'UX'],
    "description": ['Worked with a team and created several pages for the website from scratch', 'Engaged in discussions regarding our daily targets and presented updates on my progress'],
    "color": 'black',
    "brief":"A startup by IITians to provide quality home salon services through online booking",
  },
  
]

const Experience = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <span>GIG &nbsp;</span>
        <span>QUEST</span>
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
