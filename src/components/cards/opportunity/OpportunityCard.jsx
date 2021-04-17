import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { capitalize } from '../../../util/common.js';


const useStyles = makeStyles((theme) => ({
    cardContainer: {
        width: "100%",
        margin: "10px"
    },
    outerCard: {
      maxWidth: 345,
      minWidth: "95%",
      textAlign: "left"
    },
    compensation: {
        fontSize: "16px",
        color: "rgba(255, 255, 255, 0.9)",
        fontWeight: 700
    },
    opportunityMedia: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    apply: {
        marginLeft: 'auto',
        backgroundColor: "#cddc39",
    },
    avatar: {
      backgroundColor: "#cddc39",
    },
  }));

export default function OportunityCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    

  return (
      <React.Fragment>
          {(props.opportunity ? 
            <Grid container justify="space-around" >
                <Grid className={classes.cardContainer} item xs={11} md={5}>
                    <Card className={classes.outerCard}>
                        <CardHeader
                        avatar={
                            <Avatar 
                                alt={props.opportunity.organizations[0].name} 
                                src={props.opportunity.organizations[0].picture} 
                                className={classes.avatar}>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                            <MoreVertIcon />
                            </IconButton>
                        }
                        title={props.opportunity.objective}
                        subheader={(
                            props.opportunity.deadline?
                            `Open until: ${new Date(props.opportunity.deadline).toLocaleDateString()}`:
                            ""
                        )}
                        />
                        <CardMedia
                        className={classes.opportunityMedia}
                        image="https://res.cloudinary.com/torre-technologies-co/image/upload/v1616011736/origin/opportunities/Screen_Shot_2021-03-17_at_1.33.12_PM_di65j9.jpg"
                        title={props.opportunity.objective}
                        />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(capitalize(props.opportunity.type))}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(capitalize(props.opportunity.organizations[0].name))} 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(
                                props.opportunity.remote ?
                                "Remote":
                                "Local"
                            )} 
                        </Typography>
                        <Typography className={classes.compensation} variant="body1" color="textSecondary" component="p">
                            {(
                                (props.opportunity.compensation && props.opportunity.compensation.visible) ?
                                `${props.opportunity.compensation.data.currency} ${props.opportunity.compensation.data.minAmount} ${props.opportunity.compensation.data.periodicity} `:
                                ""
                            )}
                        </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <Button className={classes.apply} variant="contained">Apply</Button>
                            <IconButton
                                className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                                </Typography>
                                <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
 :
                <React.Fragment/> 
          )}
      </React.Fragment>
      
    
  );
}