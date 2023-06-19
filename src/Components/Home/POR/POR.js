import React from 'react'
import classes from './POR.module.css'
import PORCard from './PORCard/PORCard'
import InfinitoLogo from '../../../Assets/Logos/InfinitoLogo.png'
import NJACKLogo from '../../../Assets/Logos/NJACKLogo.jpg'
import EcellLogo from '../../../Assets/Logos/EcellLogo.png'

const data = [
  {
    "logo": InfinitoLogo,
    "link" :"https://infinito.iitp.ac.in/",
    "org":"Infinito Web and App Committee",
    "position":"Coordinator",
    "year": "2022-23",
    "description":['Infinito is the <strong>Annual Sports Fest of IIT Patna<strong>','Managed a team of <strong>9 sub-coordinators</strong> and was responsible for the<strong> development and maintenance of the Infinito2k23 Website</strong>','Helped the events committee to<strong> manage large crowds </strong>during the fest'],
  },
  {
    "logo": NJACKLogo,
    "link" :"https://njack.iitp.ac.in/",
    "org":"NJACK Dev and Open Source",
    "position":"Sub-Coordinator",
    "year": "2021-22",
    "description":['<strong>NJACK Dev and OS (Computer Science Club of IIT Patna) is responsible for fostering culture of development and open source </strong>among the student community','Acted as a mentor in CodePeak for <strong>two consecutive years and mentored more than 15 participants</strong> from different colleges', 'Initiated the <strong>Monthly Mini-Project Series</strong> in IIT Patna for promoting development among IIT Patna students and guided around <strong>40 students</strong> for the same','<strong>Organised various sessions and guest lectures</strong> for guiding the students of IIT Patna.'],    
  },
  {
    "logo": EcellLogo,
    "link" :"https://ecell.iitp.ac.in/",
    "org":"E-Cell Tech and Dev",
    "position":"Sub-Coordinator",
    "year": "2021-22",
    "description":[],
      
  }
]

const POR = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <div>P<span>OSITION</span></div>
        <div>o<span>F</span></div>
        <div>R<span>ESPONSIBILITY</span></div>
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <PORCard key={key} link={item.link} logo={item.logo} org={item.org} position={item.position} year={item.year} description={item.description} />
            )
          })
        }
      </div>
    </div>
  )
}

export default POR
