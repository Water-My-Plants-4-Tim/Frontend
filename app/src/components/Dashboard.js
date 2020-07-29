import React, { createContext, useState } from 'react'
import PlantList from './PlantList'
import Plant from './Plant'
import { Typography, makeStyles } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: 'flex',
        flexWrap: 'nowrap',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
})

const initialPlants = [
    {
        id: 1,
        nickname: 'Steve',
        species: 'Cactus',
        h2oFrequency:'Until he says stop',
        location: 'Inside'
    },
    {
        id: 2,
        nickname: 'Bob',
        species: 'Cactus',
        h2oFrequency:'Until he says stop',
        location: 'Outside'
    },
   
    
]

export const PlantContext = createContext()
console.log("PlantContext", PlantContext)

const DashBoard = () => {
    const [plants, setPlants] = useState(initialPlants)
    const classes = useStyles();
    return (
        <>
            <Typography variant='h3' gutterBottom>
                Dashboard
            </Typography>
            <div className={classes.root}>
                <PlantContext.Provider value={{ plants }}>
                    <PlantList />

                    <Switch>
                        

                    </Switch>
                </PlantContext.Provider>
            </div>
        </>
    )
}
export default DashBoard