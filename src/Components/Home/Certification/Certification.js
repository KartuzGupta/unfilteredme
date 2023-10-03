import React, { useEffect }  from 'react'
// components
import CertificationCard from './CertificationCard/CertificationCard'
// CSS
import classes from './Certification.module.css';
// import images
import excelBeginners from '../../../Assets/Certificates/excelBeginner.jpg'
import sqlBasics from '../../../Assets/Certificates/sqlBasics.jpg'
import digitalMarketing from '../../../Assets/Certificates/googleDigitalMarketing.webp'
import dataAnalytics from '../../../Assets/Certificates/DataAnalytics.jpg';
import SixSigma from '../../../Assets/Certificates/SixSigma.png';
import PowerBi from '../../../Assets/Certificates/PowerBi.png';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
const Certification = (props) => {
    useEffect(() => {
        AOS.init({
            delay: 100,
        });
    }, [])
    const data = [
        {
            "img": SixSigma,
            "link": "https://coursera.org/verify/BVZLWHVZ7XEW",
        },
        {
            "img": PowerBi,
            "link": "https://coursera.org/verify/B2KRMFE2YZ3",
        },
        {
            "img": excelBeginners,
            "link": "https://olympus1.mygreatlearning.com/course_certificate/BRFZDRBR",
        },
        {
            "img": sqlBasics,
            "link": "https://olympus1.mygreatlearning.com/course_certificate/GSKDMUNE"
        },
        {
            "img": digitalMarketing,
            "link": "https://drive.google.com/file/d/11U0bgxqEKTE1dMbVjr9mdPKVKTaY3NpH/view?usp=drivesdk"
        },
        {
            "img": dataAnalytics,
            "link": "https://olympus1.mygreatlearning.com/course_certificate/EABYUNGS",
        }
    ]
    return (
        <div id={props.id} className={classes.section}>
            <div className={classes.heading}>
                Courses & Certifications
            </div>
            <div className={classes.container}>
            {
                data.map((data, key) => {
                    return (
                        <CertificationCard img={data.img} link={data.link} id={key} />
                    )
                })    
            }
            </div>
        </div>
    )
}

export default Certification
