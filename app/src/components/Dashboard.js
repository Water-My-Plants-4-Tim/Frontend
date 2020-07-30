import React, { createContext, useState, useEffect } from 'react'
import PlantList from './PlantList'
import Plant from './Plant'
import NewPlant from './NewPlant'
import { Typography, makeStyles } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'


const useStyles = makeStyles({
    root: {
        width: "100%",
        display: 'flex',
        flexWrap: 'nowrap',
        margin: 20
        // justifyContent: 'center',
        // alignItems: 'center',
    },
})

const initialPlants = [
    // {
    //     id: 1,
    //     nickname: 'Steve',
    //     species: 'Cactus',
    //     h2oFrequency:'Until he says stop',
    //     location: 'Inside'
    // },
    // {
    //     id: 2,
    //     nickname: 'Bob',
    //     species: 'Cactus',
    //     h2oFrequency:'Until he says stop',
    //     location: 'Outside'
    // },
    // {
    //     id: 2,
    //     nickname: 'Bob',
    //     species: 'Cactus',
    //     h2oFrequency:'Until he says stop',
    //     location: 'Outside'
    // },{
    //     id: 2,
    //     nickname: 'Bob',
    //     species: 'Cactus',
    //     h2oFrequency:'Until he says stop',
    //     location: 'Outside'
    // },{
    //     id: 2,
    //     nickname: 'Bob',
    //     species: 'Cactus',
    //     h2oFrequency:'Until he says stop',
    //     location: 'Outside'
    // },{
    //     id: 2,
    //     nickname: 'Bob',
    //     species: 'Cactus',
    //     h2oFrequency:'Until he says stop',
    //     location: 'Outside'
    // },
   
    
]
const initialFormValues = {
    nickname: '',
    species: '',
    h2oFrequency: '',
    location: '',
}
// const getPlants = () => {
//     axios.get('https://cors-anywhere.herokuapp.com/https://elton-watermyplants.herokuapp.com/createnewuser')
// }
export const PlantContext = createContext()
// console.log("PlantContext", PlantContext)

const DashBoard = () => {
    const [plants, setPlants] = useState(initialPlants)
    const [formValues, setFormValues] = useState(initialFormValues)

    const classes = useStyles();

    useEffect (() => {

    })

    const addPlant = newPlant => {
        axios
            .post('https://cors-anywhere.herokuapp.com/https://elton-watermyplants.herokuapp.com/plants/users/plants', newPlant)
            .then(res => {
                console.log(res.data)
                setPlants([...plants, res.data])
                
            })
            .catch(err => console.log(err))
    }

    const onSubmit = evt => {
        evt.preventDefault();
        const newPlant = {
            nickname: formValues.nickname.trim(),
            species: formValues.species.trim(),
            h2oFrequency: formValues.h2oFrequency.trim(),
            location: formValues.location.trim(),
        }
        addPlant(newPlant)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return (
        <>
            <Typography variant='h3' className={classes.root} gutterBottom>
                Dashboard
            </Typography>
            <div className={classes.root}>
                <PlantContext.Provider value={{ plants }}>
                    <NewPlant 
                        values={formValues}
                        onInputChange={onInputChange}
                        onSubmit={onSubmit}
                    />

                    <PlantList />

                    <Switch>
                        

                    </Switch>
                </PlantContext.Provider>
            </div>
        </>
    )
}
export default DashBoard