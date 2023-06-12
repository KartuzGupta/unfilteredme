import React from 'react'
import classes from './AboutMe.module.css';
import { TypeAnimation } from 'react-type-animation';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';
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
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <span>Hey Guys, I'm</span>
        <span><TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Kartikay Gupta',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Mechanical Engineer',
            1000,
            'Web Developer',
            1000,
            'Competitve Programmer',
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
                <Link to={item.link} className={classes.logo}>{item.logo}</Link>
              )
            })
            }
            
        </div>
      </div>
      <div className={classes.rightContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum in, recusandae doloribus dolorem iusto ullam sint alias magni pariatur dolor ipsum, eum id incidunt facilis dignissimos ratione excepturi enim.
      </div>
    </div>
  )
}

export default AboutMe
