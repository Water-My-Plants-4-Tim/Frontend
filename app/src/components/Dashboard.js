import React from 'react'
import NewPlant from './NewPlant'
import PlantList from './PlantList'
import Plant from './Plant'
import { Typography, makeStyles } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 500,
    },
})
const DashBoard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h3' gutterBottom>
                Dashboard
            </Typography>
            <Switch>

            </Switch>
        </div>
    )
}
export default DashBoard