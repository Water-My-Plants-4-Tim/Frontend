import React from 'react';
import { makeStyles, CardHeader } from '@material-ui/core'
import { Route } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewPlant from './NewPlant'
import UpdatePlant from './UpdatePlant'



const useStyles = makeStyles({
    root: {
        margin: 20,
        padding: 20,
        width:250,
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
});

const Plant = props => {

    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={5} >
            {/* <CardHeader>
                <CardMedia
                    className={classes.media}
                    image="../images/daniel-oberg-sEApBUS4fIk-unsplash"
                />
            </CardHeader> */}
            <CardContent>
                <Typography 
                    className={classes.title} 
                    color='textSecondary'
                    gutterBottom
                >
                    Nickname: {props.plant.nickname}
                </Typography>
                <Typography 
                    variant="h5" component="h2" gutterBottom
                >
                    Species: {props.plant.species}
                </Typography>
                <Typography 
                    variant="body2" component="p" gutterBottom
                >
                    H2O Frequency: {props.plant.h2oFrequency}
                </Typography>
                <Typography 
                    variant="body2" component="p" gutterBottom
                >
                    Location: {props.plant.location}
                </Typography>
                {/* <Route exact path='/protected/newplant' component={NewPlant} /> */}
                <UpdatePlant/>
                <CardActions>
                    <Button size='large' elevation={5} >Edit Plant</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default Plant;