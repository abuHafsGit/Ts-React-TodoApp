import React, { useState, type FormEvent } from "react"

type handleNewTodoType = {
    handleNewTodo: Function
}

function AddTodo(props: handleNewTodoType) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTodo = {
            id: new Date().getTime().toString(),
            title,
            description
        }
        props.handleNewTodo(newTodo)
        setTitle('')
        setDescription('')
        // console.log(newTodo)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={title} onChange={handleTitle} />
            </div>
            <div>
                <label htmlFor="description">Title</label>
                <input type="text" name="title" value={description} onChange={handleDescription} />
            </div>
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo
