import React, { useEffect } from 'react'
import classes from './AboutMe.module.css';
import { TypeAnimation } from 'react-type-animation';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = (props) => {
  const socialMedia = [
    {
      "name": 'LinkedIn',
      "logo": <BsLinkedin />,
      "link": 'https://www.linkedin.com/in/kartikay-gupta/',
    },
    {
      "name": 'Github',
      "logo": <BsGithub />,
      "link": 'https://github.com/KartuzGupta',
    },
    {
      "name": 'Gmail',
      "logo": <SiGmail />,
      "link": 'mailto:kartikay.gupta2002@gmail.com',
    },
    {
      "name": 'Twitter',
      "logo": <FaTwitter />,
      "link": 'https://twitter.com/aatma_0',
    }

  ]
  const resumeLink = 'https://drive.google.com/file/d/1FotL6UK5xcUh_VLDC0_HOTtY1tJgGYDO/view?usp=sharing';
  useEffect(() => {
    AOS.init({delay: 100,});
  }, [])
  return (
    
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <span >Hey Guys, I'm</span>
          <span><TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            `Kartikay Gupta`,
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Supply Chain Enthusiast',
            1000,
            'Coder',
            1000,
            'Web Developer',
            1000,
            'Lazy',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '3vw', fontWeight:'500', display: 'block', fontFamily: 'Poppins, sans-serif', color:"whitesmoke" }}
          repeat={Infinity}
          className={classes.typing}
        /></span>
        <div className={classes.socialContainer}>
          
          {
            socialMedia.map((item, index) => { 
              return (
                <Link to={item.link} className={classes.logo} target='_blank'>{item.logo}</Link>
              )
            })
          }
            
        </div>
        </div>

      <div className={classes.rightContainer} data-aos="fade-left">
        <p>Hello ! I'm Kartikay Gupta. I am currently pursuing MBA (OSCM) from IIM Mumbai and completed my B.Tech in Mechanical Engineering from IIT Patna. Hailing from Kanpur, I have completed high school and intermediate here and have a strong passion for business and management. I have completed multiple internships, giving me an opportunity to explore and contribute to real world problems.</p>
        {/* <p>I am Kartikay, a passionate web developer pursuing my BTech degree at IITP. With experience in internships, projects, and active involvement in college clubs, I have developed strong programming and design skills. I actively participate in competitive programming to enhance my abilities. I am now seeking innovative opportunities to apply my expertise and contribute to impactful web development projects.</p> */}
        <Link to={resumeLink} target='_blank'><Button variant="outlined" classes={{root:classes.resumeButton}}>View my Resume</Button></Link>
      </div>
    </div>
  )
}

export default AboutMe
