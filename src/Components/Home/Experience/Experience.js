import React from 'react'
import classes from './Experience.module.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import SrijconLogo from '../../../Assets/Logos/SrijconLogo.svg'
import BarberaLogo from '../../../Assets/Logos/BarberaLogo.png'
// import GESLLogo from '../../../Assets/Logos/GESLLogo.jpg'
import OpusLogo from '../../../Assets/Logos/BirlaOpusLogo.jpeg'

const data = [
  {
    "logo": OpusLogo,
    "link": 'https://www.birlaopus.com/',
    "org":"Birla Opus",
    "role":"Supply Chain Intern",
    "duration": "(Apr 2024- May 2024)",
    "tech": ['Inventory', 'Automation'],
    "description": [
      "<strong>Project 1 – Inventory Norms Definition along with RLT Calculation</strong>",

      "Spearheaded SKU rationalization by leveraging Pareto Principle (ABC analysis) to identify the top 20% of 1,200+ SKUs driving 80% of value across 70+ depots",
      "Implemented XYZ classification via Coefficient of Variation analysis (7 months) for demand variability",
      "Calculated comprehensive Replenishment Lead Times (RLTs) by combining optimized PLTs, dynamic TLFTs, accurate TLTs and safety buffer",
      "Defined min/max inventory levels and reorder points at each depot aimed at minimizing stock-outs and overstocking",
      "Developed a user-friendly, VBA-powered Excel tool for automated RLT and Inventory Norm Generation",

      "<strong>Project 2 – IDTM Strategy & Automation</strong>",

      "Led Inter-Depot Transfer of Materials (IDTM) to enhance SKU-Depot inventory optimization, reducing overall transfer distances by prioritizing proximal warehouse selections and leveraging Order Pack Quantity transfers",
      "Enabled zone-based and unrestricted transfer options within the IDTM system to streamline surplus mitigation and deficit replenishment, ensuring agile and responsive inventory management",
      "Utilized the Pandas library to crunch through 100,000+ SKU-depot stock data points in under 4 minutes, generating a 1300+ ton inter-depot transfer plan",

      "<strong>Project 3 – Allocation Strategy & Automation</strong>",

      "Spearheaded a multi-phase SKU distribution strategy for demand fulfilment and proactive inventory management",
      "Leveraged Inventory Status Files from SAP-IBP to generate Stock Transfer Orders (STO) along with post-STO lane weight analysis to recommend adjustments for maximizing Full Truckload (FTL) utilization",
      "Ensured system reliability through rigorous User Acceptance Testing (UAT) before deployment",
      "Documented the model with Standard Operating Procedures (SOPs) and user manuals for smooth implementation",
      "Achieved 77% (~7.5hrs to ~1.75hrs) reduction in distribution planning time, saving 1000+ man-hours annually",

    ],
    "color": 'purple',
    "brief": "A new venture of Aditya Birla Group aiming to disrupt the paints industry, operating under their flagship company Grasim Industries.",
  },
  // {
  //   "logo": GESLLogo,
  //   "link": 'https://ganeshaecosphere.com/',
  //   "org":"GESL",
  //   "role":"Operations Analyst Intern",
  //   "duration": "(Jun 2023- Jul 2023)",
  //   "tech": ['Operations', 'Optimization'],
  //   "description": ['Performed <strong>AS-IS analysis</strong> by process mapping to visualize the recycling plant’s operations, identifying system <strong>bottlenecks</strong>',
  //     'Devised strategies to minimize <strong>Non Value Adding</strong> activities using <strong>Value Stream Mapping</strong> leading to reduction in <strong>Throughput Time</strong>',
  //     'Implemented <strong>‘Set & Shine’ of 5S</strong> for workplace organization, using machine signage & periodic cleaning',
  //     'Attained a reduction in <strong>Handling & Transportation expenses</strong>, through location optimization and decentralization of <strong>Outbound Logistics</strong>, leading to an enhanced inventory management system',
  //   ],
  //   "color": 'green',
  //   "brief":"Ganesha Ecosphere Ltd. is into sustainable business of PET plastic Recycling, aiming to collect maximum PET waste and minimize its environmental impact by turning it into resource.",
  // },
  {
    "logo": SrijconLogo,
    "link": 'https://www.srijcon.com/',
    "org":"Srijcon",
    "role":"ReactJS Developer Intern",
    "duration": "(Mar 2023- May 2023)",
    "tech": ['ReactJS', 'CSS', 'Redux', 'UI', 'UX', 'Figma'],
    "description": ['Revamped the <strong>end-to-end</strong> content upload workflow and landing page <strong>UI/UX</strong>, amplifying competitiveness & customer satisfaction',
      'Incorporated <strong>flowcharts</strong> as visual aids to concisely communicate complex processes within the workflow',
      'Amplified user interaction through integration of a <strong>feature-rich text editor</strong> boosting customer engagement',
      'Steered <strong>data-driven</strong> decisions and implemented <strong>15+ Kaizens</strong> via <strong>DMAIC</strong> method, leading to improved user experience',
    ],
    "color": 'red',
    "brief":"Srijcon is a platform where creators can showcase their creations and ideas",
  },
  {
    "logo": BarberaLogo,
    "org": "Barbera",
    "link": 'https://barbera.netlify.app/',
    "role":"Frontend Developer Intern",
    "duration": "(Jun 2021- Oct 2021)",
    "tech": ['HTML', 'JavaScript', 'CSS', 'UI', 'UX'],
    "description": ['Worked with a <strong>20+</strong> member team and created several pages for the website from scratch', 'Engaged in discussions regarding our daily targets and presented updates on my progress'],
    "color": 'black',
    "brief":"A startup by IITians to provide quality home salon services through online booking",
  },
  
]

const Experience = (props) => {
  return (
    <div className={classes.section} id={props.id}>
      <div className={classes.heading}>
        <span>GIG &nbsp;</span>
        <span>QUEST</span>
      </div>
      <div className={classes.cards}>
        {
          data.map((item, key) => {
            return (
              <ExperienceCard key={key} brief={item.brief} link={item.link} logo={item.logo} org={item.org} duration={item.duration} role={item.role} tech={item.tech} description={item.description} color={item.color} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Experience
