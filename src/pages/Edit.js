import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Form from '../component/Form'

export default function Edit() {
    const history = useHistory()
    const match = useRouteMatch()
    const [isTodo, setTodo] = useState()


    useEffect(() => {
        const getTodo = async () => {
            const todoz = await axios.get(`https://thopzapi.herokuapp.com/thops/${match.params.id}`).then(res => res.data)
            setTodo(todoz)
        }
        getTodo()
    }, [match.params.id])

    const onSubmit = async (data) => {
        await axios.post(`https://thopzapi.herokuapp.com/thops/${match.params.id}`, data)
        history.push('/')
    }

    return isTodo ? (
        <div>
            <Form isTodo={isTodo} onSubmit={onSubmit} />
        </div>
    ) : <h1>Loading</h1>
}
