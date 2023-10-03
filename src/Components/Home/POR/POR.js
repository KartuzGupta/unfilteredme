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
    "position":"Secretary",
    "year": "2022-23",
    "description": ['Infinito is the <strong>Annual Sports Fest of IIT Patna<strong>',
      'Championed a 3-tier team of <strong>30+</strong> to achieve a <strong>50%</strong> growth in footfall to over <strong>5000</strong> attendees',
      'Efficiently managed, organized, and orchestrated 10+ events during the annual sports fest involving <strong>500+</strong> participants',
      'Led nationwide registration & fest awareness surge through transformative site enhancements',
      'Negotiated & liaised with authorities for successful hosting of the website on IIT Patna servers'
    ],
  },
  {
    "logo": NJACKLogo,
    "link" :"https://njack.iitp.ac.in/",
    "org":"NJACK Dev and Open Source",
    "position":"Coordinator",
    "year": "2021-23",
    "description": ['<strong>NJACK Dev and OS (Computer Science Club of IIT Patna) is responsible for fostering culture of development and open source </strong>among the student community',
      'Initiated and led the launch of the Monthly Mini Project Series guiding more than <strong>50 students</strong>',
      'Organized <strong>10+</strong> impactful sessions and guest lectures providing guidance to <strong>200+</strong> IITP students'],    
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
