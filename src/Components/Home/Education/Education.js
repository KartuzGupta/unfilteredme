import React from 'react'
import classes from './Education.module.css'
import EducationCard from './EducationCard/EducationCard'
import IITPLogo from '../../../Assets/Logos/IITPLogo.png'
import VSECLogo from '../../../Assets/Logos/VSECLogo.png'
import IIMLogo from '../../../Assets/Logos/IIMMumbaiLogo.png'
const data = [
  {
    "logo": IIMLogo,
    "link" :"https://www.iimmumbai.ac.in/",
      "school":"Indian Institute of Management Mumbai",
      "degree":"MBA (OSCM)",
      "result": "8.90 (upto 3rd Module)",
      "year":"2025"
  },
  {
    "logo": IITPLogo,
    "link" :"https://www.iitp.ac.in/",
      "school":"Indian Institute of Technology Patna",
      "degree":"B.Tech. Mechanical Engineering",
      "result": "8.39 (upto 7th semester)",
      "year":"2024"
  },
  {
    "logo": VSECLogo,
    "link" :"https://www.vsec.in/",
      "school":"Dr. Virendra Swarup Education Centre",
      "degree":"CISCE Intermediate",
      "result": "96.25%",
      "year":"2020"
  },
  {
    "logo": VSECLogo,
    "link" :"https://www.vsec.in/",
    
      "school":"Dr. Virendra Swarup Education Centre",
      "degree":"CISCE High School",
      "result": "95%",
      "year":"2018"
  }
]

const Education = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      
      <div className={classes.heading}>
        <span>STUDY &nbsp;</span>
        <span>ABODE</span>
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <EducationCard key={key} link={item.link} logo={item.logo} school={item.school} degree={item.degree} year={item.year} result={item.result}  />
            )
          })
        }
      </div>
    </div>
  )
}

export default Education
