import React from 'react'
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const data = [

  {
    "title": "Designed Quadcopter prototype for image processing and visual mapping",
    "techStack": ['Python', 'NodeJS', 'Coppelia Sim', 'Ansys', 'Arduino',"Electronics"],
    "brief": `Built this project as a part of Engineering Practicum course under the guidance of <i><a href="http://www.iitp.ac.in/~athakur" target="_blank">Dr. Atul Thakur</a></i> and <i><a href="https://www.iitp.ac.in/~aashwani/" target="_blank">Dr. Ashwani Assam</a></i> in my junior year`,
    "description": ['Mastered drone motions and mechanics through comprehensive simulations conducted on <strong>Coppelia Sim</strong>',
      'Employed <strong>Gantt Charts</strong> to optimize monthly task planning and scheduling, managing project effectively',
      'Demonstrated expert control of the Parrot AR Drone through proficient application of <strong>NodeJS</strong> library',
      '<strong>Minimized</strong> errors through the application of <strong>Poka-Yoke</strong> techniques contributing to <strong>quality improvement</strong>',
      'Executed an <strong>IoT</strong> solution integrating <strong>7+</strong> sensors for real-time collection of <strong>2000+</strong> data points across <strong>45+</strong> critical parameters, enabling precise location tracking and data-driven decision making',
      '<strong>Maximized</strong> safety for the sensors through fabrication of a protective case using <strong>3D printing</strong> technologies',
      'Performed stitching of <strong>100+</strong> images using <strong>Python OpenCV</strong> to construct an intricate 2D map of the desired region',
      'Simulated CAD models of consignment delivery drones using Ansys Fluent to assess and estimate the drag force',
      'Accomplished an accuracy of <strong>90%</strong> in 2D mapping & <strong>80%</strong> in object detection through the use of machine learning models',
      'Explored drag variations on <strong>5+</strong> payload shapes, unveiling up to <strong>20% fuel-cost reduction</strong> potential',
      'Optimized 3D printing <strong>efficiency by 30% via model redesign</strong> resulting in waste and time reduction'
    ],
    "github": null,
    "website": null,
    "drive": "https://drive.google.com/drive/folders/13lhjFQgWqxAlDYw-lopd383Shskp3e54?usp=sharing",
  },
  {
    "title": "EtherEyes",
    "techStack": ['ReactJS', 'Python', 'Machine learning'],
    "brief": "This project is built for Inter IIT Tech Meet 11 and was <strong>awarded a bronze medal</strong> by Consensys",
    "description": ["A project that <strong>allows users to make cheaper transactions by predicting gas prices and providing timely gas price notifications</strong>", `We collect live gas price data as a list of around 200 candlesticks (each candlestick is an aggregate of the past 30 minutes of data) using the <strong><a href="https://owlracle.info/eth">Owlracle</a></strong> API. This gives us the <strong>time series data of the past 100 hours of gas prices</strong>`,`We then use a popular time series forecasting model called <strong>SARIMA or Seasonal ARIMA</strong> from the <strong><a href="https://nixtla.github.io/statsforecast/models.html#autoarima">statsforecast</a></strong> package on the time series data to predict the lowest gas price expected in the next hour`, 'Added feature to <strong>toggle notification</strong> and <strong>represented the gas-price data on a graph. Also added a dark theme</strong>'],
    "github": "https://github.com/aritroCoder/EtherEyes",
    "website": null,
    "drive": null,
  },
  {
    "title": "Infinito Website",
    "techStack": ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
    "brief": "Official website for Infinito (Annual Sports Fest of Indian Institute of Technology Patna)",
    "description": [`Responsible for registering <strong>more than 1000 participants</strong> and conveying information about the fest`, 'Revamped the <strong>Frontend (HTML/CSS/JavaScript)</strong> as well as <strong>Backend (PHP, MySQL)</strong> of the Infinito2k22 website', 'Added feature for <strong>website authentication</strong> that generates an unique InfinitoID which can be used for registration in other events. Also added a utility for <strong>updating the profile information</strong> by logging into their accounts using InfinitoID/Email', 'Added a facility for <strong>password recovery</strong> by sending OTP using PHP Mailer to the registered email id and setting a new password'],
    "github": "https://github.com/Infinito-IIT-Patna/Infinito2020",
    "website": "https://infinito.iitp.ac.in/",
    "drive":null,
  },
  {
    "title": "Codepeak Website",
    "techStack": ['ReactJS', 'HTML', 'CSS'],
    "brief": "Official website for Codepeak (Open Source Program organised by IIT Patna in collaboration with IIT Guwahati)",
    "description": ['Contributed to the website as a <strong>Core Technical Team Member</strong> of Codepeak', 'Website was responsible for the registration of <strong>more than 3000 participants</strong>', 'Designed and coded several pages of the website from scratch. <strong>Fetched data from Gsheets to display on the leaderboard page and implemented a search bar for user convenience'],
    "github": "https://github.com/IITP-X-IITG/WoC-frontend",
    "website": "https://www.codepeak.tech/",
    "drive": null,
  },
  
  // {
  //   "title": "Adhyatmik Parivar Website",
  //   "techStack": ['HTML', 'CSS', 'ReactJS'],
  //   "brief": "Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)",
  //   "description": ['Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)'],
  //   "github": null,
  //   "website": "https://adhyatmikparivar.com/",
  //   "drive":null,
  // }
]

const Projects = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        PROJECTS
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <ProjectCard key={key} title={item.title} techStack={item.techStack} brief={item.brief} description={item.description} github={item.github} website={item.website} drive={item.drive} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects
