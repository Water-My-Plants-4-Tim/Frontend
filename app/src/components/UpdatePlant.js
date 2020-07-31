import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

const initialPlant = {
    nickname: '',
    species: '',
    h2oFrequency: 0, 
    imageURL: '',
}



const UpdatePlant = props => {
    const location = useLocation()
    const params = useParams()
    const { push } = useHistory()
    const [plant, setPlant] = useState(initialPlant)

    useEffect(() => {
        if (location.state) {
            setPlant(location.state);
        } else {
            axios
                .get('https://water-my-pants.herokuapp.com/api/plants')
                .then(res => setPlant(res.data))
                .catch(err => console.lot(err))
        }
    }, [])

    const changeHandler = evt => {
        evt.persist();
        let value = evt.target.value;
        setPlant({
            ...plant,
            [evt.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put('https://water-my-pants.herokuapp.com/api/plants/:id', plant)
            .then(res => {
                props.setPlant(res.data)
                push('/protected')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    name="nickname"
                    onChange={changeHandler}
                    placeholder="nickname"
                    value={plant.nickname}
                />
                <Input 
                    type="text"
                    name="species"
                    onChange={changeHandler}
                    placeholder="species"
                    value={plant.species}
                />
                <Input 
                    type="number"
                    name="h2oFrequency"
                    onChange={changeHandler}
                    placeholder="h2oFrequency"
                    value={plant.h2oFrequency}
                />
                <Input 
                    type="text"
                    name="url"
                    onChange={changeHandler}
                    placeholder="image url"
                    value={plant.location}
                />
                <Button type='submit' size='small'>Update</Button>
            </form>
        </div>
    )
} 
export default UpdatePlant