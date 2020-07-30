import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import uuid from 'react-uuid'

const initialPlant = {
    id: uuid(),
    nickname: '',
    species: '',
    h2oFrequency:'',
    location: ''
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
                .get('')
                .then(res => setMovie(res.data))
                .catch(err => console.lot(err))
        }
    }, [])

    const changeHandler = evt => {
        evt.persist();
        setPlant({
            ...plant,
            [evt.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put('', plant)
            .then(res => {
                props.setPlant(res.data)
                push('/protected')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>nickname</label>
                <Input 
                    type="text"
                    name="nickname"
                    onChange={changeHandler}
                    placeholder="nickname"
                    value={plant.nickname}
                />
                <label>species</label>
                <Input 
                    type="text"
                    name="species"
                    onChange={changeHandler}
                    placeholder="species"
                    value={plant.species}
                />
                <label>h2oFrequency</label>
                <Input 
                    type="text"
                    name="h2oFrequency"
                    onChange={changeHandler}
                    placeholder="h2oFrequency"
                    value={plant.h2oFrequency}
                />
                <label>location</label>
                <Input 
                    type="text"
                    name="location"
                    onChange={changeHandler}
                    placeholder="location"
                    value={plant.location}
                />
                <Button size='small'>Update</Button>
            </form>
        </div>
    )
} 
export default UpdatePlant