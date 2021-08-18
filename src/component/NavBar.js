import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="bg-gray-50 p-4 w-screen">
            <Link className="mx-10" to="/">
                TodoList
            </Link>
            <Link className="mx-10" to="/create">
                Create Todos
            </Link>
        </nav>

    )
}
