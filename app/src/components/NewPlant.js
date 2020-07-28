import React from 'react'
import { Input } from '@material-ui/core'

export default function NewPlant() {


    return (
        <form>
            <div className='plant-info'>
                <h4>Input plant Information</h4>

                <Input
                    placeholder='Nickname'
                    type='text'
                />

                <Input
                    placeholder='Species'
                    type='text'
                />

                <Input
                    placeholder='h2oFrequency'
                    type='text'
                />

            </div>
        </form>
    )
}
