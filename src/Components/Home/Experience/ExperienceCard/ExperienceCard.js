import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from './ExperienceCard.module.css'
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
      <Card className={classes.outerCard} style={{borderLeft:`0.25rem solid ${props.color}`, borderRadius:'0rem'}}>
        <div className={classes.card}>
            <div className={classes.logo}>
              <img src={props.logo} alt="logo" />
              <div className={classes.heading}>{props.org}</div>
            </div>
            <div className={classes.description}>
                <div className={classes.heading}>
                    {props.role}   
                </div>
                <div className={classes.matter}>
                    {props.duration}
                </div>
                <div className={`${classes.techUsed} ${classes.matter}`}>
                    {props.tech.map((item, key) => {
                        return(<p className={classes.tech}>{item}</p>)                   
                    })}
                </div>
                <div className="matter">
                    {props.brief}
                </div>  
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                {
                    props.description.map((item, key) => {
                        return(<p className={classes.details}>{item}</p>)
                    })
                }
            </CardContent>
        </Collapse>
    </Card>
  );
}

export default ExperienceCard;
