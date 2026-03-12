import Todo from "./Todo";

type todosType = {
    todos: {
        id: string;
        title: string;
        description: string;
    }[],
    handleDeleteTodo: Function
}

function Todos({ todos, handleDeleteTodo }: todosType) {
    console.log(todos)
    return (
        <div>
            {
                todos.map((todo) => (
                    <Todo todo={todo} handleDeleteTodo={handleDeleteTodo} />
                ))
            }
        </div>
    )
}

export default Todos
