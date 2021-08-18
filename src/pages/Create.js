import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../component/Form'



export default function Create() {

    const history = useHistory()

    const onSubmit = async (data) => {
        await axios.post('http://localhost:5000/thops/create', data)
        history.push('/')
    }

    return (
        <div>
            <Form onSubmit={onSubmit} />
        </div>
    )
}
