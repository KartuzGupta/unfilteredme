import React from 'react'
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const data = [

  {
    "title": "Aerial Mapping and Image Processing with Unmanned Aerial Systems",
    "techStack": ['Python', 'NodeJS', 'Coppelia Sim', 'Ansys', 'Arduino',"Electronics"],
    "brief": `Built this project as a part of Engineering Practicum course under the guidance of <i><a href="http://www.iitp.ac.in/~athakur" target="_blank">Dr. Atul Thakur</a></i> and <i><a href="https://www.iitp.ac.in/~aashwani/" target="_blank">Dr. Ashwani Assam</a></i> in my junior year`,
    "description": ['Studied and demonstrated the basic motions and mechanics of a drone on <strong>Coppelia Sim</strong>', 'Used Parrot AR Drone for our research and controlled it using the <strong>NodeJS</strong> library', 'Connected the drone with our console and processed the images and videos captured from the drone’s camera to detect various colours using <strong>Python OpenCV</strong> in real-time', 'Integrated  <strong>U-blox GPS sensor, NRF-24l01 Wifi module and Arduino Nano<strong> with the drone to send the coordinates during its flight for real-time tracking. Designed a protective case for the sensors on <strong>Solidworks</strong> and fabricated it using 3D printer', 'Also processed the images and videos obtained during its flight to <strong>create a 2D map of the region using the OpenCV image stitcher class</strong>. It uses the ORB algorithm for Image Stitching and derives its primary motivation from SIFT algorithm. ORB is a fusion of the FAST key point detector and BRIEF descriptor with some modifications','Developed a <strong>machine-learning model capable of detecting various objects</strong>. Trained our model to detect bicycles and tested it on the videos obtained from the drone. The model worked with almost <strong>70% accuracy</strong>','Extending this project to the final year BTP wherein we shall design external drone covers of various shapes and sizes and carry out <strong>CFD analysis on Ansys Fluent</strong> to estimate the drag force on it. It aims at reducing the drag force experienced by consignment delivery drones, which will ultimately help in <strong>reducing fuel consumption</strong>'],
    "github": null,
    "website": null,
    "drive": "https://drive.google.com/drive/folders/13lhjFQgWqxAlDYw-lopd383Shskp3e54?usp=sharing",
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
  {
    "title": "EtherEyes",
    "techStack": ['ReactJS', 'Python', 'Machine learning'],
    "brief": "This project is built for Inter IIT Tech Meet 11 and was <strong>awarded a bronze medal</strong> by Consensys",
    "description": ["A project that <strong>allows users to make cheaper transactions by predicting gas prices and providing timely gas price notifications</strong>", `We collect live gas price data as a list of around 200 candlesticks (each candlestick is an aggregate of the past 30 minutes of data) using the <strong><a href="https://owlracle.info/eth">Owlracle</a></strong> API. This gives us the <strong>time series data of the past 100 hours of gas prices</strong>`,`We then use a popular time series forecasting model called <strong>SARIMA or Seasonal ARIMA</strong> from the <strong><a href="https://nixtla.github.io/statsforecast/models.html#autoarima">statsforecast</a></strong> package on the time series data to predict the lowest gas price expected in the next hour`, 'Added feature to <strong>toggle notification</strong> and <strong>represented the gas-price data on a graph. Also added a dark theme</strong>'],
    "github": "https://github.com/aritroCoder/EtherEyes",
    "website": null,
    "drive": null,
  }
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
