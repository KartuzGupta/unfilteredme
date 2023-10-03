import React from 'react'
import classes from './Experience.module.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import SrijconLogo from '../../../Assets/Logos/SrijconLogo.svg'
import BarberaLogo from '../../../Assets/Logos/BarberaLogo.png'
import GESLLogo from '../../../Assets/Logos/GESLLogo.jpg'
const data = [
  {
    "logo": GESLLogo,
    "link": 'https://ganeshaecosphere.com/',
    "org":"GESL",
    "role":"Operations Analyst Intern",
    "duration": "(Jun 2023- Jul 2023)",
    "tech": ['Operations', 'Optimization'],
    "description": ['Performed <strong>AS-IS analysis</strong> by process mapping to visualize the recycling plant’s operations, identifying system <strong>bottlenecks</strong>',
      'Devised strategies to minimize <strong>Non Value Adding</strong> activities using <strong>Value Stream Mapping</strong> leading to reduction in <strong>Throughput Time</strong>',
      'Implemented <strong>‘Set & Shine’ of 5S</strong> for workplace organization, using machine signage & periodic cleaning',
      'Attained a reduction in <strong>Handling & Transportation expenses</strong>, through location optimization and decentralization of <strong>Outbound Logistics</strong>, leading to an enhanced inventory management system',
    ],
    "color": 'green',
    "brief":"Ganesha Ecosphere Ltd. is into sustainable business of PET plastic Recycling, aiming to collect maximum PET waste and minimize its environmental impact by turning it into resource.",
  },
  {
    "logo": SrijconLogo,
    "link": 'https://www.srijcon.com/',
    "org":"Srijcon",
    "role":"ReactJS Developer Intern",
    "duration": "(Mar 2023- May 2023)",
    "tech": ['ReactJS', 'CSS', 'Redux', 'UI', 'UX', 'Figma'],
    "description": ['Revamped the <strong>end-to-end</strong> content upload workflow and landing page <strong>UI/UX</strong>, amplifying competitiveness & customer satisfaction',
      'Incorporated <strong>flowcharts</strong> as visual aids to concisely communicate complex processes within the workflow',
      'Amplified user interaction through integration of a <strong>feature-rich text editor</strong> boosting customer engagement',
      'Steered <strong>data-driven</strong> decisions and implemented <strong>15+ Kaizens</strong> via <strong>DMAIC</strong> method, leading to improved user experience',
    ],
    "color": 'red',
    "brief":"Srijcon is a platform where creators can showcase their creations and ideas",
  },
  {
    "logo": BarberaLogo,
    "org": "Barbera",
    "link": 'https://barbera.netlify.app/',
    "role":"Frontend Developer Intern",
    "duration": "(Jun 2021- Oct 2021)",
    "tech": ['HTML', 'JavaScript', 'CSS', 'UI', 'UX'],
    "description": ['Worked with a <strong>20+</strong> member team and created several pages for the website from scratch', 'Engaged in discussions regarding our daily targets and presented updates on my progress'],
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
