import React, { createContext, useState, useEffect } from 'react'
import PlantList from './PlantList'
// import Plant from './Plant'
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

// const initialPlants = [
//     {
//         id: 1,
//         nickname: 'Steve',
//         species: 'Cactus',
//         h2oFrequency:'7',
//     },
//     {
//         id: 2,
//         nickname: 'ook',
//         species: 'Cactus',
//         h2oFrequency:'8',
        
//     },
//     {
//         id: 3,
//         nickname: 'big',
//         species: 'Cactus',
//         h2oFrequency:'9',
        
//     },{
//         id: 4,
//         nickname: 'ape',
//         species: 'Cactus',
//         h2oFrequency:'2',
        
//     },{
//         id: 5,
//         nickname: 'veeno',
//         species: 'Cactus',
//         h2oFrequency:'5',
        
//     },{
//         id: 6,
//         nickname: 'Bob',
//         species: 'Cactus',
//         h2oFrequency:'4',
        
//     },
// ]
const initialFormValues = {
    nickname: '',
    species: '',
    h2oFrequency: 1,
    imageURL: ''
}
// const getPlants = () => {
//     axios.get('https://cors-anywhere.herokuapp.com/https://elton-watermyplants.herokuapp.com/createnewuser')
// }
export const PlantContext = createContext()
console.log("PlantContext", PlantContext)

const DashBoard = () => {
    // const [plants, setPlants] = useState(initialPlants)
    const [formValues, setFormValues] = useState(initialFormValues)
    console.log(formValues, 'tesing formvalues')

    const classes = useStyles();

    // useEffect (() => {

    // })

    // const addPlant = newPlant => {
    //     console.log('Newplant', newPlant)

    // }

    // const onSubmit = evt => {
    //     console.log('Submitting')
    //     evt.preventDefault();
    //     const newPlant = {
    //         nickname: formValues.nickname.trim(),
    //         species: formValues.species.trim(),
    //         h2oFrequency: Number(formValues.h2oFrequency),
    //         imageURL: formValues.imageURL
    //     }
    //     console.log(newPlant, 'testing before')

    //     axiosWithAuth()
    //     .post('https://water-my-pants.herokuapp.com/api/plants', newPlant)
    //     .then(res => {
    //         console.log(res.data, 'does it work')
    //         setPlants([...plants, res.data])
            
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    //    // addPlant(newPlant)
    //     console.log(newPlant, 'testing after')
    // }

    // const onInputChange = evt => {
    //     const { name, value } = evt.target

    //     setFormValues({
    //         ...formValues,
    //         [name]: value
    //     })
    // }



    return (
        <>
            <Typography variant='h3' className={classes.root} gutterBottom>
                Dashboard
            </Typography>
            <div className={classes.root}>
                {/* <PlantContext.Provider value={{ plants }}> */}
                <PlantContext.Provider>

                    <NewPlant 
                    />

                    <PlantList />

                    <Switch>
                        

                    </Switch>
                </PlantContext.Provider>
            </div>
            {/* {
                initialPlants.map(data => 
                    // console.log(data, 'this is data')
                    <p>{data.nickname}</p>
                )
            } */}
        </>
    )
}
export default DashBoard