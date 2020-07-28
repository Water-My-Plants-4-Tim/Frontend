import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({

    root: {
        minWidth: 275,
        maxWidth: 300,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    return (

       

        <Card className={classes.root} elevation={5} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Species
                </Typography>
                <Typography variant="h5" component="h2">
                    Nickname
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Location
                </Typography>
                <Typography variant="body2" component="p">
                    h20 Frequency

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Card Action</Button>
            </CardActions>
        </Card>
    );
}