import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function List() {


    const [isTodo, setTodo] = useState([])


    useEffect(() => {
        const fetchTodo = async () => {
            const todosz = await axios.get('https://thopzapi.herokuapp.com/thops').then(res => res.data)
            setTodo(todosz)
        }
        fetchTodo()
    }, [])



    const deletePost = (id) => {
        axios.delete('https://thopzapi.herokuapp.com/thops/delete/' + id)
            .then(res => res.data)
        setTodo(pre => {
            return pre.filter(item => item._id !== id)
        })
    }


    return (
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="w-screen divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                username
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {isTodo.map(item => {
                            return (

                                <tr className="" key={item._id} >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        < div className="">{item.username}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        < div className="">{item.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                                        <Link to={`/edit/${item._id}`} >
                                            <button className="bg-blue-500 px-6 py-2  md:m-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
                                        </Link>
                                        <button className="bg-red-500 px-6 py-2  md:m-2 text-white hover:shadow-lg text-xs font-thin" onClick={() => deletePost(item._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div >
    )
}
