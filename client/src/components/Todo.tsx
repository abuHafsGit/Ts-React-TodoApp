
type todoType = {
    todo: {
        id: string;
        title: string;
        description: string;
    },
    handleDeleteTodo: Function
}

function Todo({ todo, handleDeleteTodo }: todoType) {
    console.log(todo)
    const { id, title, description } = todo
    const handleDelete = (id: string) => {
        handleDeleteTodo(id)
    }
    return (
        <div>
            <p>{id}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={() => { handleDelete(id) }}>delete</button>
        </div>
    )
}

export default Todo
