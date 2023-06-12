import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from './ExperienceCard.module.css'
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExperienceCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card className={classes.outerCard} style={{borderLeft:`0.25rem solid ${props.color}`}}>
        <div className={classes.card}>
            <Link to={props.link} target='_blank'> 
            <div className={classes.logo}>
              <img src={props.logo} alt="logo" />
              <div className={classes.heading}>{props.org}</div>
          </div>
          </Link>
            <div className={classes.description}>
                <div className={classes.heading}>
                    {props.role}   
                </div>
                <div className={classes.matter}>
                    {props.duration}
                </div>
                <div className={`${classes.techUsed} ${classes.matter}`}>
                    {props.tech.map((item, key) => {
                        return(<p className={classes.tech} key={key}>{item}</p>)                   
                    })}
                </div>
                <div className={`${classes.matter} ${classes.expand}`}>
                  <p>{props.brief}</p>
                  <CardActions>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                </div>
                         
            </div>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                {
                    props.description.map((item, key) => {
                        return(<p className={classes.details} key={key}>{item}</p>)
                    })
                }
            </CardContent>
        </Collapse>
    </Card>
  );
}

export default ExperienceCard;
