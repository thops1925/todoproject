import React from 'react'
import { useForm } from 'react-hook-form'


export default function TodoForm({ isTodo, onSubmit }) {

    const { register, handleSubmit } = useForm({
        defaultValues: { username: isTodo ? isTodo.username : "", email: isTodo ? isTodo.email : "" }
    })

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })
    return (

        <form className="w-full mt-10 md:w-full"
            onSubmit={submitHandler}>
            <div className="w-full md:w-full px-3">
                <label className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">UserName:</label>
                <input className=" w-full text-gray-700 border border-gray-200 rounded py-3
                     px-4 leading-tight  focus:bg-white focus:border-gray-500"
                    {...register("username", { required: true })}
                    name="username"
                    id="username"
                    type="text"
                />
                <label className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email:</label>
                <input className=" w-full text-gray-700 border border-gray-200 rounded py-3
                     px-4 leading-tight  focus:bg-white focus:border-gray-500"
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                    type="email"
                />

            </div>
            <div className="mt-3 ml-3">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700
                     text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
        </form>

    )
}
