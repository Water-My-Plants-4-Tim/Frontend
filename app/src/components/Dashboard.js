import React, { createContext, useState } from 'react'
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

const initialPlants = [
    {
        id: 1,
        nickname: 'Steve',
        species: 'Cactus',
        h2oFrequency:'Until he says stop'
    },
    {
        id: 2,
        nickname: 'Bob',
        species: 'Cactus',
        h2oFrequency:'Until he says stop'
    },
]

export const PlantContext = createContext()
console.log("PlantContext", PlantContext)

const DashBoard = () => {
    const [plants, setPlants] = useState(initialPlants)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h3' gutterBottom>
                Dashboard
            </Typography>
            <PlantContext.Provider value={{ plants }}>
                <PlantList />

            </PlantContext.Provider>
            <Switch>
                

            </Switch>
        </div>
    )
}
export default DashBoard