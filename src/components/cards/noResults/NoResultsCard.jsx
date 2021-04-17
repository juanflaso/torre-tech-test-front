import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  noResultsOuterCard: {
    maxWidth: 345,
    margin: "30px auto",
    padding: "auto",
    paddingBottom: "40px",
    
  },
  noResultsText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1rem"
  }
});

export default function NoResultsCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Card className={classes.noResultsOuterCard}>
            <Typography className={classes.noResultsText} gutterBottom component="h2">
                Sorry! No results for your search
            </Typography>
        </Card>
    </React.Fragment>
    
  );
}