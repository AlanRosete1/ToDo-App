import TodoItem from "./TodoItem"
import CrossIcon from "./icons/IconCross"

const TodoList = ({todos}) => { 
    return (
        <div className="bg-white rounded-md mt-6">

        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ))}

        </div>
    )
}

export default TodoList