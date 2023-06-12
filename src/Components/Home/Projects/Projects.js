import React from 'react'
import classes from './Projects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

const data = [
  {
    "title": "Codepeak Website",
    "techStack": ['ReactJS', 'HTML', 'CSS'],
    "brief": "Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)",
    "description": ['Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)'],
    "github": null,
    "website": "https://www.codepeak.tech/",
    "drive": null,
  },
  {
    "title": "Aerial Mapping and Image Processing with Unmanned Aerial Systems",
    "techStack": ['Python', 'NodeJS', 'Coppelia Sim', 'Ansys', 'Arduino',"Electronics"],
    "brief": "Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)",
    "description": ['Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)'],
    "github": null,
    "website": null,
    "drive": "https://drive.google.com/drive/folders/13lhjFQgWqxAlDYw-lopd383Shskp3e54?usp=sharing",
  },
  {
    "title": "Infinito Website",
    "techStack": ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
    "brief": "Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)",
    "description": ['Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)'],
    "github": null,
    "website": "https://infinito.iitp.ac.in/",
    "drive":null,
  },
  {
    "title": "Adhyatmik Parivar Website",
    "techStack": ['HTML', 'CSS', 'ReactJS'],
    "brief": "Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)",
    "description": ['Official website for Codepeak (Open Source Program organised by IIT Patna in colab with IIT Guwahati)'],
    "github": null,
    "website": "https://adhyatmikparivar.com/",
    "drive":null,
  }
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
