import React from 'react'
import classes from './POR.module.css'
import PORCard from './PORCard/PORCard'
import InfinitoLogo from '../../../Assets/Logos/InfinitoLogo.png'
import NJACKLogo from '../../../Assets/Logos/NJACKLogo.jpg'
const data = [
  {
    "logo": InfinitoLogo,
    "link" :"https://infinito.iitp.ac.in/",
      "org":"Infinito Web and App Committee",
      "position":"Coordinator",
    "year": "2022-23",
     "description":[],
  },
  {
    "logo": NJACKLogo,
    "link" :"https://njack.iitp.ac.in/",
      "org":"NJACK Dev and Open Source",
      "position":"Sub-Coordinator",
    "year": "2021-22",
     "description":[],
      
  },
  {
    "logo": InfinitoLogo,
    "link" :"https://infinito.iitp.ac.in/",
    "org":"Infinito Web and App Committee",
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
