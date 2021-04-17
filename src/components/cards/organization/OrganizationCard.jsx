import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles({
  personOuterCard: {
    maxWidth: 345,
    margin: "auto",
    paddingBottom: "40px"
  },
  media: {
    height: 300,
  },
  signal: {
    margin: 'auto',
    backgroundColor: "#cddc39",
  },
  carouselDivider: {
      margin: "10px 5px 10px 5px"
  },
  personName: {
    color: "rgba(255, 255, 255, 0.9)",
    marginRight: "20px",
    marginLeft: "20px"
  },
  organizationMembers: {
    width: "144px",
    margin: "auto"
  }
});

export default function OrganizationCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.personOuterCard}>
            <CardActionArea>
                {(
                    props.picture?
                    <CardMedia
                    className={classes.media}
                    image={props.picture}
                    title={props.name}
                    />: <></>
                )}
                
                <CardContent>
                <Typography className={classes.personName} gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                {(props.members.length > 0 ?
                    <React.Fragment>
                        <Typography className={classes.personDescription} variant="body2" color="textSecondary" component="p">
                        You would be working with:
                        </Typography>
                        <AvatarGroup className={classes.organizationMembers} max={4}>
                            {(
                                props.members.map( (member) =>
                                    <Avatar key={member.subjectId + props.id} alt={member.name} src={member.picture} />
                                )
                            )}
                        </AvatarGroup>
                    </React.Fragment>:
                    <React.Fragment></React.Fragment>
                )}
                
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.signal} variant="contained">Signal</Button>
            </CardActions>
        </Card>
    </React.Fragment>
    
  );
}