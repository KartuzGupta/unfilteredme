import React from 'react'
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const data = [
  {
    "title": "Codepeak Website",
    "techStack": ['ReactJS', 'HTML', 'CSS'],
    "brief": "Official website for Codepeak (Open Source Program organised by IIT Patna in collaboration with IIT Guwahati)",
    "description": ['Contributed to the website as a <strong>Core Technical Team Member</strong> of Codepeak', 'Website was responsible for the registration of <strong>more than 3000 participants</strong>', 'Developed several pages of the site from scratch. Fetched data from Google Sheets and displayed on the leaderboard page and incorporated a search bar for user convenience'],
    "github": "https://github.com/IITP-X-IITG/WoC-frontend",
    "website": "https://www.codepeak.tech/",
    "drive": null,
  },
  {
    "title": "Aerial Mapping and Image Processing with Unmanned Aerial Systems",
    "techStack": ['Python', 'NodeJS', 'Coppelia Sim', 'Ansys', 'Arduino',"Electronics"],
    "brief": `Built this project as a part of Engineering Practicum course under the guidance of <i><a href="http://www.iitp.ac.in/~athakur" target="_blank">Dr. Atul Thakur</a></i> and <i><a href="https://www.iitp.ac.in/~aashwani/" target="_blank">Dr. Ashwani Assam</a></i> in my junior year`,
    "description": ['Worked in a team of <strong>5 members</strong> for the project. Demonstrated basic motions of drone using CoppeliaSim', 'Processed the images and videos captured by Parrot AR Drone <strong>to detect colours in real-time using Python </strong>', 'Integrated <strong>GPS Sensor</strong> with the drone to track its real-time location and <strong>created a 2D map of a region</strong> using the videos captured by the drone with the help of machine learning algorithms', 'Designed a Machine Learning Model to <strong>detect objects</strong> while capturing video from the drone with almost <strong>70% accuracy</strong>', 'Conducted an analysis on various drone shapes using <strong>Ansys to determine the drag values</strong> experienced by the drone. This analysis aimed to<strong> assist in designing an optimized model that reduces drag</strong>'],
    "github": null,
    "website": null,
    "drive": "https://drive.google.com/drive/folders/13lhjFQgWqxAlDYw-lopd383Shskp3e54?usp=sharing",
  },
  {
    "title": "Infinito Website",
    "techStack": ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
    "brief": "Official website for Infinito (Annual Sports Fest of Indian Institute of Technology Patna)",
    "description": [`Responsible for registering <strong>more than 1000 participants</strong> and conveying information about the fest`, 'Revamped the <strong>Frontend (HTML/CSS/JavaScript)</strong> as well as <strong>Backend (PHP, MySQL)</strong> of the Infinito2k22 website', 'Added <strong>Website Authentication</strong> and generated a unique Infinito ID for each participant registering on the platform', 'Implemented a User profile page and a <strong>utility for updating profiles</strong> and improved the UI/UX for various pages on the site'],
    "github": "https://github.com/Infinito-IIT-Patna/Infinito2020",
    "website": "https://infinito.iitp.ac.in/",
    "drive":null,
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
