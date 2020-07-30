import React from 'react'
import { Input, Typography, Card, CardContent, CardActions, Button, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        margin: 20,
        padding: 20,
        maxHeight: 250,
        width:250,
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
});



const NewPlant = props => {

    const classes = useStyles()

    
    const { values, onSubmit, onInputChange } = props


    return (
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
                            type='text'
                            onChange={onInputChange}
                            // value={values.nickname}


                        />

                        <Input
                            placeholder='Species'
                            type='text'
                            onChange={onInputChange}
                            // value={values.species}

                        />

                        <Input
                            placeholder='h2oFrequency'
                            type='text'
                            onChange={onInputChange}
                            // value={values.h2oFrequency}


                        />
                        <Input
                            placeholder='location'
                            type='text'
                            onChange={onInputChange}
                            // value={values.location}


                        />

                    </div>
                    <CardActions>
                        <Button type='submit' size='large'>Add Plant</Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    )
}
export default NewPlant
