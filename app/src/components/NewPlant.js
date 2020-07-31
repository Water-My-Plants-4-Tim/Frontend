import React, { useState, useEffect } from 'react'
import { Input, Typography, Card, CardContent, CardActions, Button, makeStyles } from '@material-ui/core'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const useStyles = makeStyles({
    root: {
        margin: 20,
        padding: 20,
        maxHeight: 250,
        width: 250,
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
});

const initialPlant = {
    nickname: '',
    species: '',
    h2oFrequency: 1,
    imageURL: '',
}
const initialPlant2 = [{
    nickname: "ooga",
    species: "ape",
    h2oFrequency: 6,
    imageURL: '',
}]
// const plantsArr = [];
const NewPlant = props => {
    const { plant } = props

    const [plantFormValues, setPlantFormValues] = useState(initialPlant)
    const [plants, setPlants] = useState([]);


    // console.log(plantFormValues, 'oooooooooooo ooooo')
    const classes = useStyles()


    useEffect(() => {
        axiosWithAuth()
            .get('/api/plants')
            .then(res => {
                // console.log(res.data, 'this is res')
                setPlants([...plants, ...res.data])
                // console.log(plants, 'post set')
                // let anything = res.data
                // anything.map(data => {
                //     plants.push(data)
                //     console.log(plants,'inside then')
                // })
                // let anything = res.data.map()
                // console.log(anything, 'this is anything')
            })
            .catch(err => {
                debugger
                console.log(err)
            })
    }, [])

    // console.log(plants, 'outside useEffect')
    // console.log(plants[0], 'this is id')
    // console.log(plants, 'post plants')

    // console.log(plants[1], 'this is plant 1')
    if (plants.length !== 0) {
        console.log(plants[1].id, 'this is plant 1')

    }


    // useEffect(() => {
    //     axiosWithAuth()
    //     .get('/api/plants') 
    //     .then(res => {
    //         setPlants(res.data);
    //         // console.log(plants, 'oooooo')
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [plants]);

    // const addPlant = newPlant => {
    //     console.log('new plant', newPlant)
    //     axiosWithAuth()
    //         .get('/api/plants', newPlant)
    //         .then(res => {
    //             console.log(res.data, 'does it work')
    //             // setPlantFormValues([...plantFormValues, res.data])
    //             console.log(plantFormValues, 'after')
    //             // console.log(res.data, 'should work')
    //             setPlants(res.data)
    //             console.log(plants, 'all plants')
    //         })
    //         .catch(err => {
    //             debugger
    //             console.log(err)
    //         })
    // }


    const onSubmit = evt => {
        evt.preventDefault();
        const newPlant = {
            nickname: plantFormValues.nickname.trim(),
            species: plantFormValues.species.trim(),
            h2oFrequency: plantFormValues.h2oFrequency,
            imageURL: plantFormValues.imageURL
        }
    }



    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setPlantFormValues({
            ...plantFormValues,
            [name]: value
        });
    };

    // plants.map(data => {
    //     // console.log(data, 'this is data')
    // })


    // console.log(plants, 'pre return')

    return (
        <>
            <Card className={classes.root} elevation={5}>
                <CardContent>

                    <form
                        onSubmit={onSubmit}
                    >
                        <div className='plant-info'>
                            <Typography
                                component='h2' gutterBottom
                            >Input New Plant Information</Typography>

                            <Input
                                placeholder='Nickname'
                                name='nickname'
                                type='text'
                                onChange={onChange}
                                required
                                value={plantFormValues.nickname}


                            />

                            <Input
                                placeholder='Species'
                                name='species'
                                type='text'
                                onChange={onChange}
                                required
                                value={plantFormValues.species}

                            />

                            <Input
                                placeholder='h2oFrequency'
                                name='h2oFrequency'
                                type='number'
                                min='1'
                                onChange={onChange}
                                required
                                value={plantFormValues.h2oFrequency}


                            />
                            <Input
                                placeholder='Image URL'
                                name='imageURL'
                                type='text'
                                onChange={onChange}
                                value={plantFormValues.imageURL}


                            />


                        </div>
                        <CardActions>
                            <Button type='submit' size='large'>Add Plant</Button>
                        </CardActions>
                    </form>

                </CardContent>
            </Card>
            <Card>
                <div>
                    <h3>My Plants</h3>
                    {
                        // function display() {
                        //     if(plants.length !== 0 ? plants.map(data => {
                        //         <p>{data.id}</p>
                        //     }): null)

                        plants && plants.map(data => (
                            <>
                                <p>Nickname: {data.nickname}</p>
                                <p>Species: {data.species}</p>
                                <p>h2oFrequency:{data.h2oFrequency}</p>
                                {/* <p>{data.imageURL}</p> */}
                                <img style={{ width: '100px' }} src={data.imageURL} />
                            </>
                        ))
                    }




                </div>
            </Card>
        </>
    )
}
export default NewPlant
